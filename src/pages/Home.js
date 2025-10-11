import React from 'react'
import Banner from '../components/Banner/Banner'
import About from '../components/About'
import ServicesSection from '../components/ServicesSection'
import Testimonial from '../components/Testimonial'
import Email from '../components/Email'
import Blog from '../components/Blog'
import Features from '../components/Features'
import Hero from '../components/Banner/Hero'
import { BannerData } from '../components/Banner/BannerData'
import { ImportantButtons } from '../components/ImportantButtons'
import { HomePageContent } from '../components/HomePageContent'
import { WhatsappButton } from '../components/WhatsappButton'
import VisaApplicationForm from '../components/VisaApplicationForm'


const Home = () => {
    return (
        <>
        {/* <Banner /> */}
        {/* <SlickSlider /> */}
        <Hero slides={BannerData}/>
        <ImportantButtons/>
        <HomePageContent/>
        <WhatsappButton/>
        {/* <About />
        <ServicesSection />
        <Features />
        <Email />
        <Testimonial />
        <Blog /> */}
        </>
    )
}

export default Home;
