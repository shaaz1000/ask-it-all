import { Avatar } from '@mui/material'
import React from 'react'
import './UserInfo.scss';

function UserInfo({profileImage, title, subtitle}) {
  return (
    <div className='user-info'>
        <Avatar src={profileImage}  alt="Remy Sharp" className='avatar'/>
        <div className='user-info-details'>
            <p className='poppins-semibold'>{title}</p>
            <p className='poppins-light'>{subtitle}</p>
        </div>
    </div>
  )
}

export default UserInfo