import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import type { RefObject } from "react";
import { createPhoneModel } from "./createPhoneModel";

const poses = [
  { at: 0, x: 0.13, y: -0.52, z: -0.12, lift: 0.05 },
  { at: 0.34, x: -0.08, y: 0.55, z: 0.08, lift: 0.12 },
  { at: 0.68, x: 0.1, y: 3.5, z: -0.08, lift: 0.06 },
  { at: 1, x: 0.02, y: Math.PI * 2 - 0.16, z: 0.015, lift: 0 },
];

export function createPhoneScene(
  host: HTMLDivElement,
  progress: RefObject<number>,
  onReady: () => void,
  onUnavailable: () => void,
) {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.45;
  host.appendChild(renderer.domElement);
  host.dataset.renderer = "webgl";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 60);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, 0.04);
  scene.environment = environment.texture;
  room.dispose();
  pmrem.dispose();

  scene.add(new THREE.HemisphereLight(0xffffff, 0x5b6070, 2));
  const key = new THREE.DirectionalLight(0xffffff, 4);
  key.position.set(-3, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xe3e9ff, 3);
  rim.position.set(4, 1, -4);
  scene.add(rim);

  let dirty = true;
  let visible = false;
  let lost = false;
  let current = progress.current;
  let previousTime = 0;
  const model = createPhoneModel(() => {
    dirty = true;
  });
  scene.add(model.phone);

  function draw(time: number) {
    const delta = Math.min((time - previousTime) / 1000 || 1 / 60, 0.05);
    previousTime = time;
    const target = progress.current;
    if (!dirty && Math.abs(target - current) < 0.0001) return;
    current = THREE.MathUtils.damp(current, target, 9, delta);
    const nextPose = poses.findIndex((pose) => pose.at > current);
    const segment =
      nextPose === -1 ? poses.length - 2 : Math.max(0, nextPose - 1);
    const from = poses[segment];
    const to = poses[segment + 1];
    const alpha = THREE.MathUtils.smoothstep(current, from.at, to.at);
    model.phone.rotation.set(
      THREE.MathUtils.lerp(from.x, to.x, alpha),
      THREE.MathUtils.lerp(from.y, to.y, alpha),
      THREE.MathUtils.lerp(from.z, to.z, alpha),
    );
    model.phone.position.y = THREE.MathUtils.lerp(from.lift, to.lift, alpha);
    renderer.render(scene, camera);
    host.dataset.progress = current.toFixed(3);
    dirty = false;
  }

  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Fit both the height and the diagonal of the phone at narrow aspect ratios.
    const verticalDistance =
      6.9 / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    camera.position.set(
      0,
      0,
      Math.max(verticalDistance, (verticalDistance * 0.63) / camera.aspect),
    );
    camera.updateProjectionMatrix();
    dirty = true;
  }

  function updateLoop() {
    renderer.setAnimationLoop(
      visible && !document.hidden && !lost ? draw : null,
    );
  }

  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    dirty = true;
    updateLoop();
  });
  visibility.observe(host);
  const dimensions = new ResizeObserver(resize);
  dimensions.observe(host);
  const onLost = (event: Event) => {
    event.preventDefault();
    lost = true;
    host.dataset.renderer = "fallback";
    onUnavailable();
    updateLoop();
  };
  const onRestored = () => {
    lost = false;
    dirty = true;
    host.dataset.renderer = "webgl";
    onReady();
    updateLoop();
  };
  renderer.domElement.addEventListener("webglcontextlost", onLost);
  renderer.domElement.addEventListener("webglcontextrestored", onRestored);
  document.addEventListener("visibilitychange", updateLoop);
  resize();
  draw(performance.now());
  onReady();

  return () => {
    renderer.setAnimationLoop(null);
    visibility.disconnect();
    dimensions.disconnect();
    document.removeEventListener("visibilitychange", updateLoop);
    renderer.domElement.removeEventListener("webglcontextlost", onLost);
    renderer.domElement.removeEventListener("webglcontextrestored", onRestored);
    model.dispose();
    environment.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };
}
