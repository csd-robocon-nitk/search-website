import React from 'react'
import './gallery.css'


export default function Gallery () {
    return (
        <div id="gallery-page" className='dark'>
            <div className="nav-placeholder" />
            <div id="container" className="dark">
                <h2>Gallery</h2>
                <div id="grid">
                    {
                        (new Array(10)).fill(0).map((el, i) => {
                            let n = 2-Math.floor(Math.log(i+1)/Math.log(10))
                            let x = ""
                            for (let i=0 ; i<n ; i++) x += "0"
                            x += i+1

                            let path = `/images/gallery/${x}.jpg`
                            return <img src={path}  key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}