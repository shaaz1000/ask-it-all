


import React from 'react'
import DashboardMenu from '../DashboardMenu'
import { IconButton } from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import UserProfile from '../../UserProfile/Index'

const ProfileMenu = () => {
  return (
    <div>
      <DashboardMenu anchor={"right"}>
<div
  className="mm"
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
  }}
>
  <p style={{ fontWeight: "600" }}>Your Profile</p>
  <IconButton disableRipple>
    <MoreVert />
  </IconButton>
</div>
<UserProfile />

</DashboardMenu>
    </div>
  )
}

export default ProfileMenu
