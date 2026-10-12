import { Icon } from "./Icon";
import type { IconName } from "./Icon";

export function IconTile({ name }: { name: IconName }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-surface-alt text-zinc-700">
      <Icon name={name} size={22} />
    </span>
  );
}
