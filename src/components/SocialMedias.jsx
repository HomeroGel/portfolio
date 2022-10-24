import React from 'react'
import '../styles/SocialMedias.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialMedias() {
  return (
    <div>
      <div className='link'>
        <a className='iconsSM' rel="noreferrer" target="_blank" href="https://github.com/HomeroGel"><GitHubIcon  fontSize='large'/></a>
        <a className='iconsSM' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/homero-gelves-53712a1a8/"><LinkedInIcon fontSize='large'/></a>
      </div>
    </div>
  )
}

export default SocialMedias