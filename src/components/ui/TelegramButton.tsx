type TelegramButtonProps = {
  className?: string
  compact?: boolean
}

function TelegramIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M20.57 4.63 3.86 11.07c-1.14.46-1.13 1.1-.21 1.38l4.29 1.34 1.66 5.18c.2.56.1.78.7.78.46 0 .66-.21.92-.47l2.08-2.02 4.33 3.2c.8.44 1.37.21 1.57-.74l2.84-13.4c.29-1.17-.45-1.7-1.47-1.24Z"
        fill="currentColor"
      />
      <path
        d="m8.59 13.45 9.64-6.08c.48-.29.92-.13.56.19l-7.93 7.16-.31 3.36"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function TelegramButton({
  className,
  compact = false,
}: TelegramButtonProps) {
  return (
    <a
      aria-label="Open the HUISHUB Telegram community"
      className={[
        'telegram-button',
        compact ? 'telegram-button--compact' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      href="https://t.me/HUISHUB"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="telegram-button__icon">
        <TelegramIcon />
      </span>
      <span className="telegram-button__label">
        {compact ? 'Telegram' : 'Join on Telegram'}
      </span>
    </a>
  )
}
