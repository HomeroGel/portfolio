import React from 'react'
import tecnologies from '../json/tecnologies.json'
import '../styles/Tecnologies.css'

const Tecnologies = () => {

    return (
        <div className='tecnologiesBody'>
            <h1 id='tecnologies' className='title'>Tecnologias</h1>
            <div className='containerTec'>
                {tecnologies.map((img, index) => {
                    return (
                        
                            <div key={index}>
                                <img className='img' src={process.env.PUBLIC_URL + `${img.logo}`} alt={`${img.name}`} />
                            </div>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Tecnologies