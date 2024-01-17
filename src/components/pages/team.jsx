import React from 'react'
import './team.css'
import team_data from "../../team_data"
import TeamContent from '../team/TeamContent';
import TeamCard from '../team/TeamCard';


export default function Team () {
    return (
        <div id="team-page" className="dark">
            <div className='nav-placeholder' />
            <div id="container">
                <h2>Our Team</h2>

                <div className="section">
                    <h3>Core Team</h3>
                    <div className='flex'>
                        <TeamCard
                            {...team_data['Core Team'][0]}
                        />
                        <TeamCard
                            {...team_data['Core Team'][1]}
                        />
                    </div>
                </div>

                <div className="section">
                    <h3>SEARCH Team</h3>
                    <TeamContent
                        team={team_data['SEARCH Team']}
                    />
                </div>

                <div className="section">
                    <h3>Additional Members</h3>
                    <TeamContent
                        team={team_data['Additional Members']}
                    />
                </div>

                <div className="section">
                    <h3>Project Managers</h3>
                    <TeamContent
                        team={team_data['Project Managers']}
                    />
                </div>
                <div className="section">
                    <h3>Support Team</h3>
                    <div className="flex">
                        {
                            team_data['Support Team'].map(d => 
                                <TeamCard 
                                    {...d}
                                />    
                            )    
                        }
                    </div>
                </div>
                <div className="section">
                    <h3>Web Design Team</h3>
                    <div className="flex">
                        {
                            team_data['Web Design Team'].map(d => 
                                <TeamCard 
                                    {...d}
                                />    
                            )    
                        }
                    </div>
                </div>
                <div className="section">
                    <h3>Media Team</h3>
                    <div className="flex">
                        {
                            team_data['Media Team'].map(d => 
                                <TeamCard 
                                    {...d}
                                />    
                            )    
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}