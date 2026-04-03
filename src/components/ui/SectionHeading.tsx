type SectionHeadingProps = {
  align?: 'center' | 'start'
  description?: string
  eyebrow?: string
  title: string
}

export function SectionHeading({
  align = 'start',
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  const className = [
    'section-heading',
    align === 'center' ? 'section-heading--center' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}
