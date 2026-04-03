import { useMemo, useState } from 'react'
import type { CurriculumSemester, CurriculumYear } from '../data/landingContent'

type CurriculumSectionProps = {
  years: CurriculumYear[]
}

type SemesterTableProps = {
  semester: CurriculumSemester
  yearLabel: string
}

function SemesterTable({ semester, yearLabel }: SemesterTableProps) {
  const semesterTotal = semester.courses.reduce((sum, course) => sum + course.ects, 0)

  return (
    <article className="curriculum-semester">
      <div className="curriculum-semester__header">
        <div className="curriculum-semester__heading">
          <p className="curriculum-semester__eyebrow">{yearLabel}</p>
          <h4 className="curriculum-semester__title">{semester.label}</h4>
        </div>

        <p className="curriculum-semester__meta">{semesterTotal} ECTS Total</p>
      </div>

      {semester.note ? <p className="curriculum__note">{semester.note}</p> : null}

      <div className="curriculum-table-shell curriculum-table-shell--semester">
        <table className="curriculum-table">
          <caption className="visually-hidden">
            {yearLabel} {semester.label} schedule table
          </caption>
          <thead>
            <tr>
              <th scope="col">Course Name</th>
              <th scope="col">Code</th>
              <th scope="col">Credit Hours (ECTS)</th>
              <th scope="col">Instructor</th>
            </tr>
          </thead>

          <tbody>
            {semester.courses.map((course) => (
              <tr key={`${semester.id}-${course.id}`}>
                <td className="curriculum-table__course">{course.title}</td>
                <td className="curriculum-table__code">{course.code}</td>
                <td className="curriculum-table__credits">{course.ects}</td>
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
    </article>
  )
}

export function CurriculumSection({ years }: CurriculumSectionProps) {
  const [activeYearId, setActiveYearId] = useState(years[0]?.id ?? '')

  const activeYear = useMemo(
    () => years.find((year) => year.id === activeYearId) ?? years[0],
    [activeYearId, years],
  )

  if (!activeYear) {
    return null
  }

  return (
    <section className="section section--surface section--curriculum" id="curriculum">
      <div className="curriculum__header reveal" data-reveal>
        <h2 className="curriculum__section-title">The HUIS Curriculum</h2>
        <p className="curriculum__section-copy">
          Select a year to view only that year, with separate schedule tables for Semester I and
          Semester II.
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
              onClick={() => setActiveYearId(year.id)}
              role="tab"
              type="button"
            >
              {year.label}
            </button>
          )
        })}
      </div>

      <div className="curriculum__content content-swap" key={activeYear.id}>
        <div className="curriculum__intro reveal is-visible" data-reveal>
          <p className="curriculum__label">{activeYear.label}</p>
          <h3 className="curriculum__headline">{activeYear.headline}</h3>
          <p className="curriculum__description">{activeYear.description}</p>
        </div>

        <div className="curriculum__tables">
          {activeYear.semesters.map((semester) => (
            <SemesterTable key={semester.id} semester={semester} yearLabel={activeYear.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
