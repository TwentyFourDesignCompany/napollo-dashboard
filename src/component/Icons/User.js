import React from 'react'
import UserIcon from '../../assets/images/dash-user.svg'

const User = (props={}) => {
    return (
      <img src={UserIcon} className={props.className}/>
    )
}

export default User
