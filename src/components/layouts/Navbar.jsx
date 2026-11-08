import { useState } from 'react'
import ButtonLink from '../ui/ButtonLink'

const defaultLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Sermon', href: '#sermon' },
    { label: 'Blog', href: '#blog' },
]


function NavLinks({ links, onLinkClick, className = '' }) {
    return (
        <ul className={className}>
            {links.map((link) => (
                <li key={link.href}>
                    <a
                        href={link.href}
                        className="text-xs font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-brand-peach"
                        onClick={onLinkClick}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

function MenuToggle({ isOpen, onClick }) {
    return (
        <button
            type="button"
            className="rounded p-2 text-white hover:bg-white/10 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={onClick}
        >
            {isOpen ? (
                <span className="text-2xl leading-none" aria-hidden="true">×</span>
            ) : (
                <span className="text-2xl leading-none" aria-hidden="true">☰</span>
            )}
        </button>
    )
}


function Navbar({
    logo = '{finsweet',
    logoHref = '#home',
    links = defaultLinks,
    contactLabel = 'Contact Us',
    contactHref = '#contact',
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <header className="bg-brand-dark text-white">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex min-h-20 max-w-[1500px] items-center justify-between px-6 py-4 md:px-10 lg:px-16"
            >
                <a
                    href={logoHref}
                    className="text-xl font-bold tracking-tight"
                    aria-label={`${logo} home`}
                >
                    {logo}
                </a>

                {/* Desktop navigation: links and contact button sit in one row. */}
                <div className="hidden items-center gap-8 md:flex">
                    <NavLinks links={links} className="flex items-center gap-8" />
                    <ButtonLink href={contactHref} size="small">
                        {contactLabel}
                    </ButtonLink>
                </div>

                <MenuToggle
                    isOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </nav>

            {/* Mobile navigation appears only after the menu button is pressed. */}
            {isMenuOpen && (
                <div className="border-t border-white/10 px-6 pb-5 md:hidden">
                    <NavLinks
                        links={links}
                        onLinkClick={closeMenu}
                        className="flex flex-col gap-4 py-4"
                    />
                    <ButtonLink href={contactHref} size="small" onClick={closeMenu}>
                        {contactLabel}
                    </ButtonLink>
                </div>
            )}
        </header>
    )
}

export default Navbar
