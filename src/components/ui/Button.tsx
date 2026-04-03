import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonLinkProps = {
  children: ReactNode
  className?: string
  href: string
  variant?: Variant
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonNativeProps = {
  children: ReactNode
  className?: string
  href?: undefined
  variant?: Variant
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonLinkProps | ButtonNativeProps) {
  const { children, className, variant = 'primary' } = props
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  if ('href' in props && props.href) {
    const {
      children: omittedChildren,
      className: omittedClassName,
      href,
      variant: omittedVariant,
      ...anchorProps
    } = props
    void omittedChildren
    void omittedClassName
    void omittedVariant

    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  const {
    children: omittedChildren,
    className: omittedClassName,
    type = 'button',
    variant: omittedVariant,
    ...buttonProps
  } = props as ButtonNativeProps
  void omittedChildren
  void omittedClassName
  void omittedVariant

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  )
}
