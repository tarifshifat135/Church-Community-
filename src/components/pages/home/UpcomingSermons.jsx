import eventImage from '../../../assets/eventimg.jpg'
import SectionHeading from '../../common/SectionHeading'
import ButtonLink from '../../ui/ButtonLink'

const defaultEvent = {
  label: 'Upcoming Event',
  day: '20',
  month: 'July',
  title: 'Watch and Listen to Our Sermons',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  times: ['Friday 23:39 IST', 'Saturday 11:20 IST'],
  location: 'No 233 Main St. New York, United States',
  image: eventImage,
  imageAlt: 'Two people dressed as angels standing on a rooftop',
  registerHref: '#register',
}

function EventDetail({ type, children }) {
  return (
    <div className="flex items-start gap-4 text-sm leading-6 text-brand-ink">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0">
        {type === 'time' ? (
          <>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}
      </svg>
      <div>{children}</div>
    </div>
  )
}

function UpcomingSermons({
  eyebrow = 'Upcoming Sermons',
  title = 'Join Us and Become Part of Something Great',
  event = defaultEvent,
  viewAllHref = '#sermon',
}) {
  return (
    <section id="sermon" className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={eyebrow} title={title} className="mx-auto mb-12 max-w-2xl md:mb-16" />
        <article className="grid overflow-hidden bg-[#FFF5EB] md:grid-cols-[0.52fr_1fr]">
          <div className="flex flex-col p-8 sm:p-10 lg:p-12">
            <div className="mb-8 flex items-start justify-between gap-6">
              <p className="pt-1 text-xs font-semibold uppercase tracking-widest text-[#A54E2B]">
                {event.label}
              </p>
              <time className="text-right text-sm uppercase leading-tight text-brand-ink">
                <span className="block text-2xl font-bold">{event.day}</span>
                {event.month}
              </time>
            </div>

            <h3 className="mb-4 max-w-sm text-xl font-bold uppercase leading-tight text-brand-ink">
              {event.title}
            </h3>
            <p className="mb-8 text-sm leading-6 text-brand-ink/80">
              {event.description}
            </p>

            <div className="mb-5">
              <EventDetail type="time">
                {event.times.map((time) => (
                  <p key={time}>{time}</p>
                ))}
              </EventDetail>
            </div>

            <EventDetail type="location">{event.location}</EventDetail>

            <ButtonLink href={event.registerHref} variant="dark" className="mt-8 self-start">
              Register
            </ButtonLink>
          </div>

          <img src={event.image} alt={event.imageAlt} className="aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[420px]" />
        </article>

        <div className="mt-8 flex justify-end">
          <a href={viewAllHref} className="inline-flex items-center gap-3 font-medium text-brand-ink transition-colors hover:text-[#A54E2B]">
            View all Sermons
            <span aria-hidden="true" className="text-2xl leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default UpcomingSermons
