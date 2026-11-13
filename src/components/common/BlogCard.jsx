function BlogCard({ category, title, description, author, date, dateTime, href = '#read-more' }) {
  return (
    <article className="flex h-full flex-col border-b-8 border-transparent bg-[#FFF5EB] p-6 transition duration-300 hover:-translate-y-2 hover:border-brand-peach hover:shadow-xl focus-within:-translate-y-1 sm:p-7">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A54E2B]">{category}</p>
      <h3 className="text-xl font-bold uppercase leading-tight text-brand-ink">
        <a href={href} className="transition-colors hover:text-[#A54E2B]">{title}</a>
      </h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-brand-ink/75">{description}</p>
      <div className="mt-6 text-xs leading-5 text-brand-ink/70">
        <p>By {author}</p>
        <time dateTime={dateTime}>{date}</time>
      </div>
    </article>
  )
}

export default BlogCard
