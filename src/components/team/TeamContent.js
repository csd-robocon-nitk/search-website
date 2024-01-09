import React from "react"
import 'animate.css'
import TeamCard from "./TeamCard"

export default function TeamContent ({ team }) {
    return (
        <>
            <div className="flex">
                {team.map(({ name, photo, designation }, i) => 
                    (
                        photo
                        ?
                        <TeamCard
                            name={name} photo={photo} designation={designation} position={i}
                        />
                        :
                        null
                    )
                )}
            </div>

            <div id="team-content">
                <ul>
                    
                    {team.map(({ name, photo }) =>
                        (
                            photo
                            ?
                            null
                            :
                            <li><span class="material-symbols-outlined">smart_toy</span>{name}</li>
                        )
                    )}
                
                </ul>
            </div>
        </>
    )
}