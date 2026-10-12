import * as THREE from "three";
import appIcon from "../../assets/android-icon-monochrome.png";

function roundedShape(width: number, height: number, radius: number) {
  const x = -width / 2;
  const y = -height / 2;
  return new THREE.Shape()
    .moveTo(x + radius, y)
    .lineTo(x + width - radius, y)
    .quadraticCurveTo(x + width, y, x + width, y + radius)
    .lineTo(x + width, y + height - radius)
    .quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    .lineTo(x + radius, y + height)
    .quadraticCurveTo(x, y + height, x, y + height - radius)
    .lineTo(x, y + radius)
    .quadraticCurveTo(x, y, x + radius, y);
}

function roundedPlane(width: number, height: number, radius: number) {
  const geometry = new THREE.ShapeGeometry(
    roundedShape(width, height, radius),
    24,
  );
  const positions = geometry.attributes.position;
  const uv = geometry.attributes.uv;
  for (let i = 0; i < positions.count; i++) {
    uv.setXY(
      i,
      positions.getX(i) / width + 0.5,
      positions.getY(i) / height + 0.5,
    );
  }
  return geometry;
}

function createScreenTexture(invalidate: () => void) {
  const canvas = document.createElement("canvas");
  canvas.width = 768;
  canvas.height = 1536;
  const context = canvas.getContext("2d")!;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const logo = new Image();
  let disposed = false;

  function draw() {
    const gradient = context.createLinearGradient(0, 0, 768, 1536);
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(1, "#f2f3f5");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 768, 1536);
    if (logo.complete && logo.naturalWidth)
      context.drawImage(logo, 152, 440, 464, 464);
    context.textAlign = "center";
    context.fillStyle = "#72757a";
    context.font = "22px Arial, sans-serif";
    context.fillText("TU NEGOCIO, EN ANDROID", 384, 1010);
    context.font = "18px Arial, sans-serif";
    context.fillStyle = "#a1a1a6";
    context.fillText("Catálogo · Ventas · Operación", 384, 1060);
    context.fillStyle = "#17191c";
    context.beginPath();
    context.roundRect(294, 1490, 180, 8, 4);
    context.fill();
    texture.needsUpdate = true;
    invalidate();
  }

  draw();
  logo.onload = () => {
    if (!disposed) draw();
  };
  logo.src = appIcon;
  return {
    texture,
    dispose: () => {
      disposed = true;
      logo.onload = null;
      texture.dispose();
    },
  };
}

export function createPhoneModel(invalidate: () => void) {
  const phone = new THREE.Group();
  const metal = new THREE.MeshPhysicalMaterial({
    color: "#777b83",
    metalness: 1,
    roughness: 0.23,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
  });
  const black = new THREE.MeshStandardMaterial({
    color: "#07090c",
    metalness: 0.5,
    roughness: 0.2,
  });
  const back = new THREE.MeshPhysicalMaterial({
    color: "#252930",
    metalness: 0.42,
    roughness: 0.42,
    clearcoat: 0.5,
  });
  const bodyGeometry = new THREE.ExtrudeGeometry(roundedShape(2.8, 5.7, 0.37), {
    depth: 0.26,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.025,
    bevelThickness: 0.025,
    curveSegments: 24,
  });
  bodyGeometry.translate(0, 0, -0.13);
  phone.add(new THREE.Mesh(bodyGeometry, metal));

  const bezel = new THREE.Mesh(roundedPlane(2.75, 5.65, 0.35), black);
  bezel.position.z = 0.157;
  phone.add(bezel);

  const brandScreen = createScreenTexture(invalidate);
  const screen = new THREE.Mesh(
    roundedPlane(2.59, 5.47, 0.29),
    new THREE.MeshBasicMaterial({ map: brandScreen.texture }),
  );
  screen.position.z = 0.16;
  phone.add(screen);
  const cameraDot = new THREE.Mesh(new THREE.CircleGeometry(0.045, 24), black);
  cameraDot.position.set(0, 2.57, 0.165);
  phone.add(cameraDot);

  const backPanel = new THREE.Mesh(roundedPlane(2.75, 5.65, 0.35), back);
  backPanel.rotation.y = Math.PI;
  backPanel.position.z = -0.157;
  phone.add(backPanel);

  const cameraIsland = new THREE.Mesh(
    new THREE.ExtrudeGeometry(roundedShape(0.78, 1.43, 0.22), {
      depth: 0.08,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.015,
      bevelThickness: 0.015,
      curveSegments: 12,
    }),
    black,
  );
  cameraIsland.position.set(-0.85, 1.89, -0.18);
  cameraIsland.rotation.y = Math.PI;
  phone.add(cameraIsland);
  const glass = new THREE.MeshPhysicalMaterial({
    color: "#101926",
    metalness: 0.6,
    roughness: 0.08,
    clearcoat: 1,
  });
  for (const y of [1.57, 2.2]) {
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(0.235, 0.035, 12, 32),
      metal,
    );
    rim.position.set(-0.85, y, -0.295);
    phone.add(rim);
    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 12), glass);
    lens.scale.z = 0.25;
    lens.position.set(-0.85, y, -0.3);
    phone.add(lens);
  }
  const flash = new THREE.Mesh(
    new THREE.CircleGeometry(0.095, 24),
    new THREE.MeshBasicMaterial({ color: "#d8d5c6" }),
  );
  flash.position.set(-0.22, 2.2, -0.165);
  flash.rotation.y = Math.PI;
  phone.add(flash);

  const markCanvas = document.createElement("canvas");
  markCanvas.width = 512;
  markCanvas.height = 128;
  const markContext = markCanvas.getContext("2d")!;
  markContext.textAlign = "center";
  markContext.fillStyle = "#a2a6ad";
  markContext.font = "600 64px Arial, sans-serif";
  markContext.fillText("Emprender.", 256, 86);
  const markTexture = new THREE.CanvasTexture(markCanvas);
  markTexture.colorSpace = THREE.SRGBColorSpace;
  const mark = new THREE.Mesh(
    new THREE.PlaneGeometry(1.45, 0.36),
    new THREE.MeshBasicMaterial({
      map: markTexture,
      transparent: true,
      depthWrite: false,
    }),
  );
  mark.position.set(0, -0.65, -0.165);
  mark.rotation.y = Math.PI;
  phone.add(mark);

  for (const [x, y, height] of [
    [1.415, 0.65, 0.62],
    [-1.415, 1.05, 0.44],
    [-1.415, 0.45, 0.44],
  ]) {
    const button = new THREE.Mesh(
      new THREE.BoxGeometry(0.065, height, 0.12),
      metal,
    );
    button.position.set(x, y, 0);
    phone.add(button);
  }

  return {
    phone,
    dispose: () => {
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      phone.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          geometries.add(object.geometry);
          const entries = Array.isArray(object.material)
            ? object.material
            : [object.material];
          entries.forEach((material) => materials.add(material));
        }
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      brandScreen.dispose();
      markTexture.dispose();
    },
  };
}
