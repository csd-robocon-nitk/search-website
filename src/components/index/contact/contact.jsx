import React, { useEffect, useState } from 'react'
import './contact.css'
import image from '../../../images/svg-3.svg'
// import axios from 'axios'
import 'animate.css'

export default function ContactSection() {
	let [ name, setName ] = useState("")
	let [ email, setEmail ] = useState("")
	let [ message, setMessage ] = useState("")

    let [modalOpen, setModalOpen] = useState(false)

    // useEffect(() => {
    //     document.body.style.overflow = "hidden auto"
    // }, [])

    // useEffect(() => {
    //     document.body.style.overflow = modalOpen ? "hidden" : "hidden auto"
    // }, [modalOpen])

	return (
        <>		
            <div id="contact" className="light">
                <div id="left">
                    <div>
                        <h1>CONTACT US</h1>
                        <h2>Get in touch with us</h2>
                    </div>
                <form action='https://docs.google.com/forms/d/e/1FAIpQLSfFwlCw13XaKxwaFqxH5dekZnG4fJyC-mMpdtLNgqKjjQm17A/formResponse'
                        target='form_res'
                        method='GET'
                        className="dark"
                    >
                        <label htmlFor="name">Name</label>
                        {/* <br/> */}
                        <input id="name" value={name} type="text" onChange={(e) => setName(e.target.value)} name='entry.638404753' required />
                        {/* <br/> */}
                        <label htmlFor="email">Email</label>
                        {/* <br/> */}
                        <input id="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} name='entry.776579162' required />
                        {/* <br/> */}
                        <label htmlFor="message">Message</label>
                        {/* <br/> */}
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} name='entry.2082912176' required />
                        {/* <br/> */}
                        <button type="submit" className='button'>Submit</button>
                    </form>
                    <iframe src="" title="form response" name="form_res" style={{display:'none'}} ></iframe>
                </div>
                <div id="right">
                    <img src={image} />
                </div>
            </div>
            <div className="modal-container light"  style={{display: modalOpen ? "flex" : "none"}}>
                <div className={`modal ${modalOpen && "animate__animated animate__zoomIn animate__faster"}`}>
                    <h3>Your response has been submitted!</h3>
                    <p>We will get back to you soon :)</p>
                    <a onClick={() => setModalOpen(false)} className="button">Got it!</a>
                </div>
            </div>
        </>

	)
}
