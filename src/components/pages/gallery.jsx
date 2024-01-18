import React from 'react'
import './gallery.css'

const listext=[".jpg",".jpeg",".JPG"]

export default function Gallery () {
    return (
        <div id="gallery-page" className='dark'>
            <div className="nav-placeholder" />
            <div id="container" className="dark">
                <h2>Gallery</h2>
                <div id="grid">
                    {
                        (new Array(31)).fill(0).map((el, i) => {
                            let n = 2-Math.floor(Math.log(i+1)/Math.log(10))
                            let x = ""
                            for (let i=0 ; i<n ; i++) x += "0"
                            x += i+1
                            let path = `/images/gallery/${x}.jpg`
                            path = `/images/gallery/${x}${listext[0]}`
                            path = `/images/gallery/${x}${listext[1]}`
                            path = `/images/gallery/${x}${listext[2]}`
                            
                            return <img src={path}  key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}