import React from "react"
import { Parallax } from "react-scroll-parallax"

export default function FadeIn ({ children }) {
    return (
        <Parallax
        onEnter = {el => el.el.style.animationName = "fadeIn"}
        onExit = {el => el.el.style.animationName = null}
        >
            {children}
        </Parallax>
    )
}