interface TechPillProps {
  children: string
  className?: string
}

export function TechPill({ children, className }: TechPillProps) {
  return <span className={className}>{children}</span>
}
