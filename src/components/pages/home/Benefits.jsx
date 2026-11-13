import benefitsImage1 from '../../../assets/benefitsImg1.png'
import benefitsImage2 from '../../../assets/benefitsImg2.png'
import benefitsImage3 from '../../../assets/benefitsImg3.png'
import benefitsImage4 from '../../../assets/benefitsImg4.png'
import SectionHeading from '../../common/SectionHeading'

const defaultBenefits = [
    {
        image: benefitsImage1,
        imageAlt: 'Hands clasped together in prayer',
        title: 'Watch and Listen to Our Sermons',
        titleInImage: true,
    },
    {
        image: benefitsImage2,
        imageAlt: 'A Bible with a gold cross on its cover',
        title: 'Watch and Listen to Our Sermons',
        titleInImage: false,
        needsGradient: true,
    },
    {
        image: benefitsImage3,
        imageAlt: 'A priest reading a Bible',
        title: 'Watch and Listen to Our Sermons',
        titleInImage: true,
    },
    {
        image: benefitsImage4,
        imageAlt: 'A colorful stained-glass scene from a church',
        title: 'Watch and Listen to Our Sermons',
        titleInImage: true,
    },
]

function BenefitCard({ benefit }) {
    return (
        <article className="relative aspect-[4/5] overflow-hidden bg-brand-dark text-white transition-transform duration-300 ease-out hover:-translate-y-2">
            <img src={benefit.image} alt={benefit.imageAlt} className="absolute inset-0 h-full w-full object-cover" />

            {benefit.needsGradient && (
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            )}

            {!benefit.titleInImage && (
                <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-lg font-bold uppercase leading-tight">
                        {benefit.title}
                    </h3>
                </div>
            )}
        </article>
    )
}

function Benefits({ eyebrow = 'Watch and Listen', title = 'The Benefits of Joining Our Church', cards = defaultBenefits, }) {
    return (
        <section className="bg-[#F5F2F0] px-6 py-20 sm:px-10 lg:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionHeading eyebrow={eyebrow} title={title} className="mx-auto mb-12 max-w-2xl md:mb-16" />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((benefit) => (
                        <BenefitCard key={benefit.image} benefit={benefit} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits
