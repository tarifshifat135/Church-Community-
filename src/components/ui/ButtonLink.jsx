function ButtonLink({
  href,
  children,
  size = 'default',
  variant = 'peach',
  onClick,
  className = '',
}) {
  const sizeClasses =
    size === 'small' ? 'px-6 py-3 text-xs' : 'min-h-12 px-8 text-xs'
  const variantClasses =
    variant === 'dark'
      ? 'bg-brand-ink text-brand-peach hover:bg-brand-dark'
      : 'bg-brand-peach text-brand-ink hover:bg-brand-peach-hover'

  return (
    <a href={href} onClick={onClick} className={`inline-flex items-center justify-center rounded-md font-semibold uppercase tracking-wide transition-colors ${variantClasses} ${sizeClasses} ${className}`}>
      {children}
    </a>
  )
}

export default ButtonLink
