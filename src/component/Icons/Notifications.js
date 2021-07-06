import React from 'react'
import NotificationsIcon from '../../assets/images/notification.svg'

const Notifications = (props={}) => {
    return (
      <img src={NotificationsIcon} className={props.className}/>
    )
}

export default Notifications
