import React from 'react'
import LogoutIcon from '../../assets/images/logout.svg'

const Logout = (props={}) => {
    return (
      <img src={LogoutIcon} className={props.className}/>
    )
}

export default Logout
