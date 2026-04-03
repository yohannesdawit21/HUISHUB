import type { Course } from '../../data/landingContent'

type CourseCardProps = {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">
      <div className="course-card__top">
        <span className="course-card__serial" aria-hidden="true">
          {String(course.serialNumber).padStart(2, '0')}
        </span>
        <span className="course-card__code">{course.code}</span>
      </div>

      <div className="course-card__content">
        <h3 className="course-card__title">{course.title}</h3>
      </div>

      <p className="course-card__credits">ECTS: {course.ects}</p>
    </article>
  )
}
