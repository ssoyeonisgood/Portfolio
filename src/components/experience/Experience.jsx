import React from 'react'
import './experience.css'
import {GiCheckMark} from 'react-icons/gi'

const data = [
    {
        id: 1,
        skill: 'HTML'
    },
    {
        id: 2,
        skill: 'JavaScript'
    },
    {
        id: 3,
        skill: 'CSS'
    },
    {
        id: 4,
        skill: 'React'
    },
    {
        id: 5,
        skill: 'Python'
    }
]

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2 className='heading'>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {
                            data.map(({id, skill}) => {
                                return(
                                    <article key= {id} className='experience__details'>
                                        <GiCheckMark className="experience__details-icon"/>
                                        <div>
                                            <h4>{skill}</h4>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience