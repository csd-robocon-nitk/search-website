import React from "react"
import logo from '../../../images/logo.jpg'

export default function Post ({ details }) {
    return (
        <div id="post">
            <div id="header">
                <a href="https://www.instagram.com/csdroboconnitk/">
                    <img id="logo" src={logo} />
                </a>
                <a href="https://www.instagram.com/csdroboconnitk/">
                    <h5>csdroboconnitk</h5>
                </a>
            </div>
            <a href={details.permalink}>
                <img id="media" src={details.media_url} />
            </a>
            <p>{details.caption}</p>
        </div>
    )
}