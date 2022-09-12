import React from 'react'
import '../styles/Projects.css'
import projects from '../json/projects.json'

const Projects = () => {
  return (
    <div className='projectsBody'>
        <h1 className='title'>Projects</h1>
        <div className='containerProjects'>
            {projects.map(item =>{
                return(
                    <div className='containerItems'>
                        <img className='imgProject' src={process.env.PUBLIC_URL + `${item.img}`} alt={`${item.name}`}/>
                        <div>
                            <p>{item.name}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects