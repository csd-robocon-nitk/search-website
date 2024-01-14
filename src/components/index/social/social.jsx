import React, { useRef } from 'react'
import './social.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Post from './Post'

export default function SocialSection () {

    const [ posts, setPosts ] = useState([]);
    const instagram_container = useRef()

    useEffect(() => {
        const apiUrl = "https://graph.instagram.com/me/media";
        const accessToken = window.ig_token
        const params = new URLSearchParams({
            fields: "id,caption,media_type,media_url,thumbnail_url,permalink",
            access_token: accessToken,
        })
            axios.get(apiUrl + "?" + params).then(response=>{
                setPosts(response.data.data)
            }).catch(error => {
                console.log(error);
            });
        },
        []
    )


    function scrollLeft () {
        instagram_container.current.scrollBy({ 
            left: - window.innerWidth / 2,
            behavior: "smooth"
        })
    }

    function scrollRight () {
        instagram_container.current.scrollBy({ 
            left: window.innerWidth / 2,
            behavior: "smooth"
        })
    }



    return (
        <div id="social" className="light">
            <h1>VIDEOS</h1>
            <h2>A Glimpse into Our Work</h2>
            <div id="videos">
                <iframe src="https://www.youtube.com/embed/jTjgI6Pt33E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/Pnfq8n1dHVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
            <br/><br/><br/>

            <h1>SOCIAL</h1>
            <h2>Keep up with our Updates</h2>
            <div id="instagram-container">
                <div id="instagram" ref={ instagram_container }>
                    {
                        posts.map(post => post.media_type == "IMAGE" ? <Post details={post} /> : null)
                    }
                </div>
                <div id="left" onClick={scrollLeft}><span class="material-symbols-outlined">arrow_back_ios</span></div>
                <div id="right" onClick={scrollRight}><span class="material-symbols-outlined">arrow_forward_ios</span></div>
            </div>
        </div>
    )
}