import bannerImage from '../../../assets/bannerImg.png'

function Banner({ image = bannerImage, altText = 'Become a part of our community. A woman prays inside a church.', label = 'Welcome to our church', }) {
    return (
        <section aria-label={label} className="w-screen max-w-none overflow-hidden">
            <img src={image} alt={altText} className="block h-auto w-screen max-w-none object-contain"/>
        </section>
    )
}

export default Banner
