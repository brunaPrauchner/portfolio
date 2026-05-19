import { iconRegistry } from '../iconRegistry'
import type { IconName } from '../icons'

interface IconTileProps {
  icon: IconName
  className: string
}

export function IconTile({ icon, className }: IconTileProps) {
  const Icon = iconRegistry[icon]

  return (
    <span className={className}>
      <Icon />
    </span>
  )
}
