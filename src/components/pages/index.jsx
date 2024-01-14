import React from "react";
import HeroSection from "../HeroSection";
import GallerySection from '../index/gallery/gallery'
import EventSection from "../index/events/events";
import ContactSection from "../index/contact/contact";
import ParallaxSection from '../index/parallax/parallax'
import SocialSection from '../index/social/social'
// import TimelineSection from '../index/timeline/timeline'

const Home = () => {
    return (
        <>
            <HeroSection />
            {/* <TimelineSection /> */}
            <ParallaxSection />
            <SocialSection />
            <EventSection />
            <GallerySection />
            <ContactSection />
        </>
    );
};

export default Home;
