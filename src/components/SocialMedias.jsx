import React from 'react'
import '../styles/SocialMedias.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialMedias() {
  return (
    <div>
      <div className='link'>
        <GitHubIcon  fontSize='large'/>
        <LinkedInIcon fontSize='large'/>
      </div>
    </div>
  )
}

export default SocialMedias