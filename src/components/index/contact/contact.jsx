import React, { useEffect, useState } from 'react'
import './contact.css'
import image from '../../../images/svg-3.svg'
import axios from 'axios'
import 'animate.css'

export default function ContactSection () {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [message, setMessage] = useState("")
    let [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = "hidden auto"
    }, [])

    useEffect(() => {
        document.body.style.overflow = modalOpen ? "hidden" : "hidden auto"
    }, [modalOpen])

    let submitHandler = async (event) => {
        event.preventDefault();
        let formData = {
            name: name,
            email: email,
            message: message
        }
        // sheet url = 'https://docs.google.com/spreadsheets/d/1BeIkPnzWcrgL8jdpF5ob1ZmWH0IVqIJ0axIt5Zngpag/edit?usp=sharing'
        let response = await axios.post(
            'https://script.google.com/macros/s/AKfycbz0ktzlgtbsJg2Al4A6EInN_MzE6LE6K6mgMakTxglGEYE4cHQRKo2LtxtAxlhNJH43NA/exec',
            JSON.stringify(formData)
        )

        setName("");
        setEmail("");
        setMessage("");
        setModalOpen(true)
        document.body.style.overflow = "hidden"
        document.querySelector('.modal-container').style.top = document.body.scrollTop + 80 + "px"
    }
    return (
        <>
            <div id="contact" className="light">
                <div id="left">
                    <h1>CONTACT US</h1>
                    <h2>Get in touch with us</h2>
            
                    <form className="dark" onSubmit={submitHandler}>
                        <label htmlFor="name">Name</label>
                        <br/>
                        <input id="name" value={name} type="text" onChange={(e) => setName(e.target.value)} required />
                        <br/>
            
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input id="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required />
                        <br/>
                        <label htmlFor="message">Message</label>
                        <br/>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                        <br/>
                        <button type="submit" className='button'>Submit</button>
                    </form>
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