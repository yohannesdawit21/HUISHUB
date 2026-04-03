type BrandLogoProps = {
  alt?: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function BrandLogo({
  alt = 'HUISHUB logo',
  className,
  size = 'md',
}: BrandLogoProps) {
  return (
    <img
      alt={alt}
      className={['brand-logo', `brand-logo--${size}`, className].filter(Boolean).join(' ')}
      decoding="async"
      src="/huishub-logo.png"
    />
  )
}
