import React from 'react'
import Hero from '../components/Banner/Hero'
import { BannerData } from '../components/Banner/BannerData'
import { ImportantButtons } from '../components/ImportantButtons'
import { HomePageContent } from '../components/HomePageContent'
import { WhatsappButton } from '../components/WhatsappButton'

const Home = () => {
    return (
        <>
        <Hero slides={BannerData}/>
        <ImportantButtons/>
        <HomePageContent/>
        <WhatsappButton/>
        </>
    )
}

export default Home;
