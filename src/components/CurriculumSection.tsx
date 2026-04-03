import { useMemo, useState } from 'react'
import type { CurriculumSemester, CurriculumYear } from '../data/landingContent'

type CurriculumSectionProps = {
  years: CurriculumYear[]
}

type ScheduleRow = {
  code: string
  credits: number
  id: string
  instructor?: string
  semester: string
  title: string
}

export function CurriculumSection({ years }: CurriculumSectionProps) {
  const [activeYearId, setActiveYearId] = useState(years[0]?.id ?? '')

  const activeYear = useMemo(
    () => years.find((year) => year.id === activeYearId) ?? years[0],
    [activeYearId, years],
  )

  const scheduleRows = useMemo<ScheduleRow[]>(
    () =>
      activeYear?.semesters.flatMap((semester: CurriculumSemester) =>
        semester.courses.map((course) => ({
          code: course.code,
          credits: course.ects,
          id: `${semester.id}-${course.id}`,
          instructor: course.instructor,
          semester: semester.label,
          title: course.title,
        })),
      ) ?? [],
    [activeYear],
  )

  const semesterTotals = useMemo(
    () =>
      activeYear?.semesters.map((semester) => ({
        label: semester.label,
        total: semester.courses.reduce((sum, course) => sum + course.ects, 0),
      })) ?? [],
    [activeYear],
  )

  const yearlyTotal = useMemo(
    () => scheduleRows.reduce((total, course) => total + course.credits, 0),
    [scheduleRows],
  )

  const yearNotes = useMemo(
    () => activeYear?.semesters.flatMap((semester) => semester.note ?? []) ?? [],
    [activeYear],
  )

  if (!activeYear) {
    return null
  }

  const handleYearChange = (yearId: string) => {
    setActiveYearId(yearId)
  }

  return (
    <section className="section section--surface section--curriculum" id="curriculum">
      <div className="curriculum__header reveal" data-reveal>
        <h2 className="curriculum__section-title">The HUIS Curriculum</h2>
        <p className="curriculum__section-copy">
          Review the full yearly schedule in one place, including both semesters, credit load,
          and instructional assignments as they become available.
        </p>
      </div>

      <div
        className="tabs reveal"
        data-reveal
        style={{ transitionDelay: '90ms' }}
        role="tablist"
        aria-label="Curriculum years"
      >
        {years.map((year) => {
          const isActive = year.id === activeYear.id

          return (
            <button
              aria-selected={isActive}
              className={['tab', isActive ? 'tab--active' : ''].filter(Boolean).join(' ')}
              key={year.id}
              onClick={() => handleYearChange(year.id)}
              role="tab"
              type="button"
            >
              {year.label}
            </button>
          )
        })}
      </div>

      <div className="curriculum__content">
        <div className="curriculum__intro reveal is-visible" data-reveal key={activeYear.id}>
          <p className="curriculum__label">{activeYear.label}</p>
          <h3 className="curriculum__headline">{activeYear.headline}</h3>
          <p className="curriculum__description">{activeYear.description}</p>
        </div>

        <div className="curriculum__summary content-swap" key={`${activeYear.id}-summary`}>
          {semesterTotals.map((semester) => (
            <article className="curriculum-summary-card" key={semester.label}>
              <p className="curriculum-summary-card__label">{semester.label}</p>
              <p className="curriculum-summary-card__value">{semester.total} ECTS</p>
              <p className="curriculum-summary-card__copy">Planned credit load</p>
            </article>
          ))}

          <article className="curriculum-summary-card curriculum-summary-card--accent">
            <p className="curriculum-summary-card__label">Academic Year Total</p>
            <p className="curriculum-summary-card__value">{yearlyTotal} ECTS</p>
            <p className="curriculum-summary-card__copy">{scheduleRows.length} listed courses</p>
          </article>
        </div>

        {yearNotes.length ? (
          <div className="curriculum__notes content-swap" key={`${activeYear.id}-notes`}>
            {yearNotes.map((note) => (
              <p className="curriculum__note" key={note}>
                {note}
              </p>
            ))}
          </div>
        ) : null}

        <div className="curriculum-table-shell content-swap" key={activeYear.id}>
          <table className="curriculum-table">
            <caption className="visually-hidden">
              Full schedule table for {activeYear.label} covering Semester I and Semester II.
            </caption>
            <thead>
              <tr>
                <th scope="col">Course Name</th>
                <th scope="col">Code</th>
                <th scope="col">Credit Hours (ECTS)</th>
                <th scope="col">Semester</th>
                <th scope="col">Instructor</th>
              </tr>
            </thead>

            <tbody>
              {scheduleRows.map((course) => (
                <tr key={course.id}>
                  <td className="curriculum-table__course">{course.title}</td>
                  <td className="curriculum-table__code">{course.code}</td>
                  <td className="curriculum-table__credits">{course.credits}</td>
                  <td>
                    <span className="curriculum-table__semester-pill">{course.semester}</span>
                  </td>
                  <td
                    className={
                      course.instructor
                        ? 'curriculum-table__instructor'
                        : 'curriculum-table__instructor curriculum-table__instructor--muted'
                    }
                  >
                    {course.instructor ?? 'To be assigned'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
