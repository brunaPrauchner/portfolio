interface SectionHeadingProps {
  children: string
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="section-heading">
      <span className="section-flower" aria-hidden="true">
        {'\u273f'}
      </span>
      <span>{children}</span>
    </h2>
  )
}
