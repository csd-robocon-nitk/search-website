import React from "react";
import HeroSection from "../HeroSection";
import GallerySection from '../index/gallery/gallery'
import AboutSection from "../index/about/about";
import ContactSection from "../index/contact/contact";
import ParallaxSection from '../index/parallax/parallax'
import SponsorsSection from "../index/sponsors/sponsors"
import SocialSection from '../index/social/social'
// import TimelineSection from '../index/timeline/timeline'

const Home = () => {
    return (
        <>
            <HeroSection />
            {/* <TimelineSection /> */}
            <ParallaxSection />
            <SocialSection />
            <AboutSection />
            <GallerySection />
            <SponsorsSection />
            <ContactSection />
        </>
    );
};

export default Home;
