import React from 'react'
import './gallery.css'
import gallery_data from '../../gallery_data'

export default function Gallery () {
    return (
        <div id="gallery-page" className='dark'>
            <div className="nav-placeholder" />
            <div id="container" className="dark">
                <h2>Gallery</h2>
                <div id="grid">
                    {
                        gallery_data.map((path, i) => {
                            return <img src={path.id}  key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}