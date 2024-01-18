import React, { useState } from 'react'
import './getinvolved.css'
// import axios from 'axios'
import 'animate.css'

// ?usp=pp_url&entry.1369663969=a&entry.1538063123=b&entry.1485262299=c&entry.1231040683=d&entry.499278606=e
let nameEntry = "entry.1369663969"
let contactnoEntry = "entry.1538063123"
let emailEntry = "entry.1485262299"
let brief1Entry = "entry.1231040683"
let brief2Entry = "entry.499278606"

export default function GetInvolved () {
	let [ name, setName ] = useState("")
    let [ contactno, setContactno ] = useState("")
	let [ email, setEmail ] = useState("")
	let [ brief1, setBrief1 ] = useState("")
	let [ brief2, setBrief2 ] = useState("")

    let [modalOpen, setModalOpen] = useState(false)

    // useEffect(() => {
    //     document.body.style.overflow = "hidden auto"
    // }, [])

    // useEffect(() => {
    //     document.body.style.overflow = modalOpen ? "hidden" : "hidden auto"
    // }, [modalOpen])

	return (
        <>		
            <div className="nav-placeholder" />
            <div id="contact" className="light">
                <div id="left">
                    <div>
                        <h1>GET INVOLVED</h1>
                        <h2>Get Internship Opportunities at SEARCH</h2>
                    </div>
                    <form 
                        action='https://docs.google.com/forms/d/e/1FAIpQLSf1cTAr_SKLv2ttIgHK1o8NO7OAeY3RgJcVzhcg5mb8CFX4zA/formResponse'
                        target='form_res'
                        method='GET'
                        className="dark"
                    >
                        <label htmlFor="name">Name</label>
                        {/* <br/> */}
                        <input 
                            id="name" 
                            value={name} 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                            name={nameEntry} 
                            required 
                        />

                        <label htmlFor="contactno">Contact No.</label>
                        {/* <br/> */}
                        <input 
                            id="contactno" 
                            value={contactno} 
                            type="text" 
                            onChange={(e) => setContactno(e.target.value)} 
                            name={contactnoEntry} 
                            required 
                        />

                        <label htmlFor="email">Email ID</label>
                        {/* <br/> */}
                        <input 
                            id="email" 
                            value={email} 
                            type="text" 
                            onChange={(e) => setEmail(e.target.value)} 
                            name={emailEntry} 
                            required 
                        />


                        <label htmlFor="brief1">A brief about what you expect from us: </label>
                        {/* <br/> */}
                        <textarea 
                            id="brief1" 
                            value={brief1}
                            onChange={(e) => setBrief1(e.target.value)} 
                            name={brief1Entry} 
                            required 
                        />


                        <label htmlFor="brief2">A brief about what you know about SEARCH and how you can contribute:</label>
                        {/* <br/> */}
                        <textarea 
                            id="brief2" 
                            value={brief2}
                            onChange={(e) => setBrief2(e.target.value)} 
                            name={brief2Entry} 
                            required 
                        />

                        <button type="submit" className='button'>Submit</button>
                    </form>
                    <iframe src="" title="form response" name="form_res" style={{display:'none'}} ></iframe>
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
