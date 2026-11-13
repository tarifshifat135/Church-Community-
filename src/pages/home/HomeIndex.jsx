import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/home/Banner'
import Footer from '../../components/layouts/Footer'
import Relevants from '../../components/pages/home/Relevants'
import Benefits from '../../components/pages/home/Benefits'
import UpcomingSermons from '../../components/pages/home/UpcomingSermons'
import ServeTheWorld from '../../components/pages/home/ServeTheWorld'
import ReadBlog from '../../components/pages/home/ReadBlog'

function HomeIndex() {
  return (
    <>
      <Navbar />
      <Banner />
      <Relevants />
      <Benefits />
      <UpcomingSermons />
      <ServeTheWorld />
      <ReadBlog />
      <Footer />
    </>
  )
}

export default HomeIndex
