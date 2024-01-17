import React from "react"
import "./getinvolved.css"
import sponsors from "../../images/sponsors.png"
import { Link } from "react-scroll"

export default function GetInvolved () {
    return (
        <>
            <div id="sponsor-page" className="dark">
                <div className = "nav-placeholder"></div>
                <div id = "container">
                    <h1>SPONSORSHIPS</h1>
                    <h2>Our Current Sponsors</h2>
                    <img src = {sponsors} />

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <h1>ENDOWMENT FUND</h1>
                    <h2>Account Details</h2>
                    <br/>
                    <div id = "account">
                        <div><b>NITK/KREC Endowment Fund</b></div>
                        <div><b>Account Number:</b> 37481178720</div>
                        <div>SBI, NITK Campus Branch, Surathkal, Mangalore - 575 025</div>
                        <div><b>IFSC:</b> SBIN0002273</div>
                        <br/>
                        <div>ALL PAYMENTS MADE TO CSD ROBOCON NITK ARE SUBJECT TO <b>80G 100% TAX DEDUCTION</b></div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <h1>GET MORE INFO</h1>
                    <h2>Brochure</h2>
                    <iframe src="https://drive.google.com/file/d/1NZ-4J5EOKL8z-rkPwFhmeJEPw4LTennb/preview" width="100%" height="600" allow="autoplay"></iframe>
                    {/* <iframe src="/assets/CRN Brochure 2024.pdf" width="100%" height="600" allow="autoplay"></iframe> */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <h2>Quick Links</h2>

                    <div id = "links">
                        <a href = "/assets/CSD Robocon NITK Endowment Form.pdf" target = "_blank">
                            <div>
                                <span class="material-symbols-outlined">
                                    {/* description */}
                                </span>
                                Endowment Form
                            </div>
                        </a>

                        <a href = "/assets/CRN 2023 Season Report.pdf" target = "_blank">
                            <div>
                                <span class="material-symbols-outlined">
                                    {/* newspaper */}
                                </span>
                                Season Report 2022-23
                            </div>
                        </a>

                        <a href = "/donate" target = "_blank">
                            <div>
                                <span class="material-symbols-outlined">
                                    {/* link */}
                                </span>
                                Donate Here
                            </div>
                        </a>
                    </div>
                    <div id = "links-caption">
                        * Endowment Form needs to be filled after every payment
                        <br/>
                        ** For any queries, contact robocon@nitk.edu.in 
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}