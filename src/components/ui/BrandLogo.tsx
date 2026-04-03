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
      height="1024"
      loading="eager"
      sizes={
        size === 'sm'
          ? '46px'
          : size === 'md'
            ? '54px'
            : size === 'lg'
              ? '(max-width: 719px) 28vw, 112px'
              : '(max-width: 719px) 40vw, 160px'
      }
      src="/huishub-logo.png"
      width="1024"
    />
  )
}
