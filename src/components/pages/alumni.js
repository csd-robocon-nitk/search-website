import React from "react"
import './alumni.css'
import alumni_data from '../../alumni_data'

export default function Alumni () {    
    return (
        <div id="alumni-page" className="dark">
            <div className="nav-placeholder" />
            <div id="container">
                <h2>Our Alumni Supporters</h2>

                <div id="cards">
                    {
                        alumni_data.map((alumnus, i) => 
                            <div className="card animate__animated animate__zoomIn" style={{"animation-delay": `${i*100}ms`}} key={i}>
                                <img src={`${process.env.PUBLIC_URL}/images/alumni/${alumnus.photo}`} />
                                <div class="content">
                                    <h4>{alumnus.name}</h4>
                                    <h5>{alumnus.batch}</h5>
                                    <h5>{alumnus.department}</h5>
                                    
                                    {
                                        alumnus.amount
                                        ?
                                        <h5>Donation amount: Rs. {alumnus.amount}</h5>
                                        :
                                        null
                                    }

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}