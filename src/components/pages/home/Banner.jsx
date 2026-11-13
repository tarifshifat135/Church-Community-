import bannerImage from '../../../assets/bannerImg.png'

function Banner({ image = bannerImage, altText = 'Become a part of our community. A woman prays inside a church.', label = 'Welcome to our church' }) {
    return (
        <section id="home" aria-label={label} className="w-full overflow-hidden">
            <img src={image} alt={altText} className="block h-auto w-full max-w-full object-contain" />
        </section>
    )
}

export default Banner
