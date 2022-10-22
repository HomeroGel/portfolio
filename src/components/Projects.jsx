import React from 'react'
import '../styles/Projects.css'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    const myProjects = [
        {
            "name": "My Industrial Home",
            "url": "https://my-industrial-home-challange-mind-hub.vercel.app/",
            "img":"https://i.imgur.com/DoG3Btz.jpg",
            "github":"https://github.com/HomeroGel/my-industrial-home-challangeMindHub"
            
        },
        {
            "name": "MyTinerary",
            "url": "https://mytinerary-gelves.herokuapp.com/",
            "img":"https://i.imgur.com/qSTKfwN.jpg",
            "github":"https://github.com/HomeroGel/mytinerary-gelves"
        },
        {
            "name": "Mindy PetShop",
            "url": "https://mindy-petshop.vercel.app/",
            "img":"https://i.imgur.com/8kxVL0o.jpg",
            "github":"https://github.com/HomeroGel/Mindy-Petshop"
        },
        {
            "name": "Amazing Events",
            "url": "https://amazingeventsweb.vercel.app/",
            "img":"https://i.imgur.com/JmlflS3.jpg",
            "github":"https://github.com/HomeroGel/AmazingEventsMH"
        }
    ]
    return (
        <div className='projectsBody'>
            <h1 id='projects' className='title'>Projectos</h1>
            <div className='containerProjects'>
                {myProjects.map(item => 
                    
                        <div className='containerItems'>
                            <img className='imgProject' src={process.env.PUBLIC_URL + `${item.img}`} alt={`${item.name}`} />
                            <div>
                                <p className='nameProject'>{item.name}</p>
                                
                                    <div className='iconsProjects'>
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            <LinkIcon sx={{ fontSize: 30, color: "black" }}/>
                                        </a>
                                        <a href={item.github} target="_blank" rel="noreferrer">
                                            <GitHubIcon sx={{ fontSize: 30, color: "black" }} />
                                        </a>
                                    </div>

                            </div>
                        </div>
                    
                )}
            </div>
        </div>
    )
}


//dd
export default Projects