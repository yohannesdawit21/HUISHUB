import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { Button } from './ui/Button'
import { InputField } from './ui/InputField'

type RegistrationSectionProps = {
  yearOptions: string[]
}

type FormValues = {
  email: string
  fullName: string
  studentId: string
  year: string
}

type Feedback = {
  message: string
  tone: 'error' | 'success'
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function RegistrationSection({ yearOptions }: RegistrationSectionProps) {
  const createInitialState = (): FormValues => ({
    fullName: '',
    studentId: '',
    year: yearOptions[0] ?? '',
    email: '',
  })

  const [formValues, setFormValues] = useState<FormValues>(() => createInitialState())
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target as {
      name: keyof FormValues
      value: string
    }

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedValues = {
      fullName: formValues.fullName.trim(),
      studentId: formValues.studentId.trim(),
      year: formValues.year.trim(),
      email: formValues.email.trim(),
    }

    const hasMissingField = Object.values(normalizedValues).some((value) => !value)

    if (hasMissingField) {
      setFeedback({
        tone: 'error',
        message: 'Please complete every field before submitting the registration form.',
      })
      return
    }

    if (!isValidEmail(normalizedValues.email)) {
      setFeedback({
        tone: 'error',
        message: 'Please enter a valid email address before submitting the registration form.',
      })
      return
    }

    const firstName = normalizedValues.fullName.split(/\s+/)[0] ?? 'student'

    setFeedback({
      tone: 'success',
      message: `Thanks, ${firstName}. Your interest has been saved locally for this marketing demo.`,
    })
    setFormValues(createInitialState())
  }

  return (
    <section className="section section--join section--registration" id="registration">
      <div className="registration__intro reveal" data-reveal>
        <h2 className="registration__title">Join the HUB</h2>
        <p className="registration__copy">
          Register to join the student portal community.
        </p>
      </div>

      <div className="registration__card reveal" data-reveal style={{ transitionDelay: '120ms' }}>
        <form className="registration-form" noValidate onSubmit={handleSubmit}>
          <InputField
            autoComplete="name"
            id="fullName"
            label="Full Name"
            name="fullName"
            onChange={handleFieldChange}
            value={formValues.fullName}
          />

          <div className="registration-form__split">
            <InputField
              id="studentId"
              label="ID Number"
              name="studentId"
              onChange={handleFieldChange}
              value={formValues.studentId}
            />

            <div className="form-field">
              <label className="form-field__label" htmlFor="year">
                Year
              </label>
              <select
                className="form-field__control"
                id="year"
                name="year"
                onChange={handleFieldChange}
                required
                value={formValues.year}
              >
                {yearOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <InputField
            autoComplete="email"
            id="email"
            label="Email"
            name="email"
            onChange={handleFieldChange}
            type="email"
            value={formValues.email}
          />

          <Button className="registration-form__submit" type="submit">
            Submit Registration
          </Button>

          <p className="registration-form__note">
            Demo behavior only: this form validates input and confirms submission
            without sending data to a server.
          </p>

          {feedback ? (
            <p
              aria-live="polite"
              className={[
                'registration-form__feedback',
                `registration-form__feedback--${feedback.tone}`,
              ].join(' ')}
            >
              {feedback.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
