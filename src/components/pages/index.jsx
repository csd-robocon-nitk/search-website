import React from "react";
import HeroSection from "../HeroSection";
import GallerySection from '../index/gallery/gallery'
import EventSection from "../index/events/events";
import ContactSection from "../index/contact/contact";
import ParallaxSection from '../index/parallax/parallax'
import SocialSection from '../index/social/social'
// import TimelineSection from '../index/timeline/timeline'
import image1 from '../../images/abu.webp'

const eventsData = [
    {
      title: "Event 1",
      description: "Description for Event 1",
      instructions: "Detailed instructions for Event 1",
      learnMoreLink: "https://search.nitk.ac.in",
      image: image1,
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      instructions: "Detailed instructions for Event 2",
      learnMoreLink: "https://search.nitk.ac.in",
      image: image1, 
    },
    {
      title: "Event 3",
      description: "Description for Event 3",
      instructions: "Detailed instructions for Event 3",
      learnMoreLink: "https://search.nitk.ac.in",
      image: image1, 
    },
    {
      title: "Event 4",
      description: "Description for Event 4",
      instructions: "Detailed instructions for Event 4",
      learnMoreLink: "https://search.nitk.ac.in",
      image: image1, 
    },
  ];


const Home = () => {
    return (
        <>
            <HeroSection />
            {/* <TimelineSection /> */}
            <ParallaxSection />
            <SocialSection />
            <EventSection events={eventsData} />
            <GallerySection />
            <ContactSection />
        </>
    );
};

export default Home;
