function SectionHeading({
  eyebrow = 'Sub-headline',
  title,
  description,
  className = '',
}) {
  return (
    <div className={`text-center ${className}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-ink">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold uppercase leading-tight text-brand-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-brand-ink/80">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
