const defaultLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Sermons', href: '#sermon' },
  { label: 'Events', href: '#events' },
  { label: 'Blog', href: '#blog' },
]

const defaultSocialLinks = [
  { name: 'Facebook', href: '#facebook' },
  { name: 'Twitter', href: '#twitter' },
  { name: 'LinkedIn', href: '#linkedin' },
]

function SocialIcon({ name }) {
  if (name === 'Facebook') {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.8v3h2.6v8h3.1Z" /></svg>
  }

  if (name === 'Twitter') {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4"><path d="M20.8 7.1v.6c0 5.7-4.4 12.3-12.3 12.3-2.4 0-4.7-.7-6.5-1.9h1c2 0 3.9-.7 5.4-1.8a4.3 4.3 0 0 1-4-3 4.4 4.4 0 0 0 1.9-.1 4.3 4.3 0 0 1-3.5-4.2v-.1c.6.3 1.2.5 1.9.5a4.3 4.3 0 0 1-1.3-5.8A12.2 12.2 0 0 0 12.3 8a4.3 4.3 0 0 1 7.3-3.9 8.5 8.5 0 0 0 2.7-1 4.3 4.3 0 0 1-1.9 2.4 8.6 8.6 0 0 0 2.5-.7 9.2 9.2 0 0 1-2.1 2.3Z" /></svg>
  }

  return <span aria-hidden="true" className="text-xs font-bold">in</span>
}

function Footer({ logo = '{finsweet', links = defaultLinks, socialLinks = defaultSocialLinks }) {
  function handleSubscribe(event) {
    event.preventDefault()
  }

  return (
    <footer id="contact" className="bg-brand-ink px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.55fr_0.55fr_1.6fr] lg:gap-12">
        <div>
          <a href="#home" className="text-2xl font-bold tracking-tight">{logo}</a>
          <p className="mt-2 text-[10px] uppercase text-white/70">© Copyright Finsweet 2022</p>
          <address className="mt-8 space-y-2 text-xs not-italic leading-5 text-white/80">
            <a href="tel:+14805550103" className="block transition-colors hover:text-brand-peach">(480) 555-0103</a>
            <p>123 Main Street, NY</p>
            <a href="mailto:finsweet@example.com" className="block transition-colors hover:text-brand-peach">finsweet@example.com</a>
          </address>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="mb-5 text-sm font-semibold">Quicklinks</h2>
          <ul className="space-y-3">
            {links.map((link) => <li key={link.href}><a href={link.href} className="text-xs uppercase text-white/80 transition-colors hover:text-brand-peach">{link.label}</a></li>)}
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 text-sm font-semibold">Connect</h2>
          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => <li key={social.name}><a href={social.href} aria-label={social.name} className="flex h-7 w-7 items-center justify-center text-white transition-colors hover:text-brand-peach"><SocialIcon name={social.name} /></a></li>)}
          </ul>
        </div>

        <div>
          <h2 className="max-w-sm text-2xl font-bold uppercase leading-tight sm:text-3xl">Subscribe to Get Latest Updates and News</h2>
          <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3 rounded-md border border-white/20 p-2 sm:flex-row sm:items-center">
            <label htmlFor="footer-email" className="sr-only">Your email address</label>

            <input id="footer-email" type="email" placeholder="Yourmail@gmail.com" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/60" />
            <button type="submit" className="rounded-md bg-brand-peach px-6 py-4 text-xs font-semibold uppercase text-brand-ink transition-colors hover:bg-brand-peach-hover">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
