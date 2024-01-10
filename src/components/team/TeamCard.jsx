import React from "react"


export default function TeamCard ({ name, photo, designation, position: i }) {
    return (
        <div key={name} className="team-card animate__animated animate__zoomIn" style={{"animation-delay": `${i*100}ms`}}>
            {
                photo
                ?
                <img src={`/images/team/${photo}`} />
                :
                null
            }
            <h4>{name}</h4>
            <p>{designation}</p>
        </div>
    )
}