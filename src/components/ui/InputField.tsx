import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

type InputFieldProps = {
  autoComplete?: string
  id: string
  label: string
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
  type?: HTMLInputTypeAttribute
  value: string
}

export function InputField({
  autoComplete,
  id,
  label,
  name,
  onChange,
  type = 'text',
  value,
}: InputFieldProps) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        className="form-field__control"
        id={id}
        name={name}
        onChange={onChange}
        required
        type={type}
        value={value}
      />
    </div>
  )
}
