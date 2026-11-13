import relLeftImage from '../../../assets/relLeftimg.png'
import relMiddleImage from '../../../assets/relMiddleimg.png'
import relRightImage from '../../../assets/relRightimg.png'
import SectionHeading from '../../common/SectionHeading'
import ButtonLink from '../../ui/ButtonLink'

const defaultFeatures = [
    {
        icon: 'church',
        title: 'About our Church',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam erat.',
    },
    {
        icon: 'involved',
        title: 'Get involved',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam erat.',
    },
    {
        icon: 'giving',
        title: 'Giving back',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam erat.',
    },
]

const defaultCompassionImages = [
    { src: relLeftImage, alt: 'A man praying' },
    {
        src: relMiddleImage,
        alt: 'Two people reading together in church',
        className: 'lg:mt-16',
    },
    {
        src: relRightImage,
        alt: 'A woman offering support to people in the congregation',
        className: 'sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:mx-0 lg:mt-0 lg:w-full',
    },
]

const defaultCompassionDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

function FeatureIcon({ name }) {
    if (name === 'involved') {
        return (
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
                <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11.5 11.5a6.4 6.4 0 0 0 0 9M20.5 11.5a6.4 6.4 0 0 1 0 9M8 8a11.3 11.3 0 0 0 0 16M24 8a11.3 11.3 0 0 1 0 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        )
    }

    if (name === 'giving') {
        return (
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
                <path d="M16 25s-9-5.2-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.8-9 12-9 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M5 23h5l2.2 2H19l3-3h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }

    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-7 w-7">
            <path d="M16 26V15M16 19l-5-5M16 21l6-6M11 14V9M22 15V9M16 15V7M5 25h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="22" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    )
}

function FeatureCard({ icon, title, description }) {
    return (
        <article className="border-b-8 border-transparent bg-[#FFF5EB] px-8 py-10 transition-all duration-300 hover:-translate-y-2 hover:border-brand-peach hover:shadow-xl focus-within:-translate-y-1 sm:px-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-peach/60 text-brand-ink">
                <FeatureIcon name={icon} />
            </div>
            <h3 className="mb-3 text-2xl font-bold uppercase leading-tight text-brand-ink">
                {title}
            </h3>
            <p className="text-sm leading-6 text-brand-ink">
                {description}
            </p>
        </article>
    )
}

function CompassionPhoto({ src, alt, className = '' }) {
    return (
        <img src={src} alt={alt} className={`aspect-[4/5] w-full rounded-2xl object-cover ${className}`} />
    )
}

function Relevants({ features = defaultFeatures, compassionImages = defaultCompassionImages, compassionDescription = defaultCompassionDescription, readMoreHref = '#about',
}) {
    return (
        <>
            <section id="about" className="bg-white px-6 py-20 sm:px-10 lg:py-28">
                <div className="mx-auto max-w-6xl">
                    <SectionHeading title="A Church That's Relevant" className="mb-12 md:mb-16" />
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 pb-20 pt-8 sm:px-10 lg:pb-28">
                <div className="mx-auto max-w-5xl text-center">
                    <SectionHeading title="Love and Compassion" description={compassionDescription} />
                    <ButtonLink href={readMoreHref} className="mt-8">Read More</ButtonLink>
                </div>

                <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {compassionImages.map((photo) => (
                        <CompassionPhoto key={photo.src} {...photo} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Relevants
