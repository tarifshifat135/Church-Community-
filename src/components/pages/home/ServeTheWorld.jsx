import serveImage from '../../../assets/serveImg.png'
import ButtonLink from '../../ui/ButtonLink'

function ServeTheWorld({
  title = 'We Want to Serve the World Around Us',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
  image = serveImage,
  visitHref = '#about',
}) {
  return (
    <section className="w-full py-10 sm:py-14">
      <div className="relative flex min-h-[34rem] w-full items-center justify-center overflow-hidden sm:min-h-[40rem] lg:min-h-[46rem]">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />

        <article className="relative mx-4 w-[calc(100%-2rem)] max-w-3xl bg-white px-7 py-10 shadow-sm sm:px-12 sm:py-16 lg:min-h-[30rem] lg:px-12 lg:py-16">
          <div className="relative z-10 max-w-sm">
            <h2 className="text-3xl font-bold uppercase leading-[1.3] text-brand-ink sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-5 max-w-xs text-base leading-6 text-brand-ink/80">{description}</p>
            <ButtonLink href={visitHref} className="mt-5 h-16 min-w-40">Visit</ButtonLink>
          </div>

          <span aria-hidden="true" className="absolute right-8 top-1/2 hidden -translate-y-1/2 text-[15rem] leading-none text-brand-peach/25 sm:block">“</span>
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-4 bg-brand-peach" />
        </article>
      </div>
    </section>
  )
}

export default ServeTheWorld
