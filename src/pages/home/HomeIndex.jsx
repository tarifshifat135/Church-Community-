import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/home/Banner'
import Footer from '../../components/layouts/Footer'
import Relevants from '../../components/pages/home/Relevants'
import Benefits from '../../components/pages/home/Benefits'

const HomeIndex = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Relevants />
            <Benefits />
            <Footer />
        </>
    )
}

export default HomeIndex
