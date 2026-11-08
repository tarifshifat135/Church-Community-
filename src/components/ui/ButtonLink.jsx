function ButtonLink({
  href,
  children,
  size = 'default',
  onClick,
  className = '',
}) {
  const sizeClasses =
    size === 'small' ? 'px-6 py-3 text-xs' : 'min-h-12 px-8 text-xs'

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md bg-brand-peach font-semibold uppercase tracking-wide text-brand-ink transition-colors hover:bg-brand-peach-hover ${sizeClasses} ${className}`}
    >
      {children}
    </a>
  )
}

export default ButtonLink
