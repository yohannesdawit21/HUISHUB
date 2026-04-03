import type { CareerPath } from '../../data/landingContent'

type CareerCardProps = {
  path: CareerPath
}

export function CareerCard({ path }: CareerCardProps) {
  return (
    <article className="career-card">
      <p className="career-card__eyebrow">IS Role</p>
      <h3 className="career-card__title">{path.title}</h3>
    </article>
  )
}
