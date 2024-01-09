import './gallery.css'
import React, { useEffect, useRef, useState } from 'react'


import img1 from '../../../images/gallery/001.jpg'
import img2 from '../../../images/gallery/002.jpg'
import img3 from '../../../images/gallery/003.jpg'
import img4 from '../../../images/gallery/004.jpg'
import img5 from '../../../images/gallery/005.jpg'
import img6 from '../../../images/gallery/006.jpg'
import img7 from '../../../images/gallery/007.jpg'
import img8 from '../../../images/gallery/008.jpg'
import img9 from '../../../images/gallery/009.jpg'
import img10 from '../../../images/gallery/010.jpg'
import img11 from '../../../images/gallery/011.jpg'
import img12 from '../../../images/gallery/012.jpg'
import img13 from '../../../images/gallery/013.jpg'
import img14 from '../../../images/gallery/014.jpg'




import { Link } from 'react-router-dom'
import { useParallax } from 'react-scroll-parallax'

export default function GallerySection () {
    let parallaxEffect1 = useParallax({
        translateX: [0, -100]
    })
    let parallaxEffect2 = useParallax({
        translateX: [-100, 0]
    })

    return (
        <div id="gallery" className="dark">
            <div id="title">
                <div id="left">
                    <h1>GALLERY</h1>
                    <h2>Snapshots</h2>
                </div>
                <Link to="/gallery" className="button">View More</Link>
            </div>
            <div id="images" ref = {parallaxEffect1.ref}>
                <div id = "filmstrip"></div>

                <div id="inner">
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                    <img src={img5} />
                    <img src={img6} />
                    <img src={img7} />
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                    <img src={img5} />
                    <img src={img6} />
                    <img src={img7} />
                </div>                
            </div>
            <div id="images" ref = {parallaxEffect2.ref}>
                <div id = "filmstrip"></div>

                <div id="inner">
                    <img src={img8} />
                    <img src={img9} />
                    <img src={img10} />
                    <img src={img11} />
                    <img src={img12} />
                    <img src={img13} />
                    <img src={img14} />
                    <img src={img8} />
                    <img src={img9} />
                    <img src={img10} />
                    <img src={img11} />
                    <img src={img12} />
                    <img src={img13} />
                    <img src={img14} />
                </div>

                <div id = "filmstrip"></div>
                
            </div>
        </div>
    )
}