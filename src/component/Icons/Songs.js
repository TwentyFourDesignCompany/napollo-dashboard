import React from 'react'
import SongsIcon from '../../assets/images/music.svg'

const Songs = (props={}) => {
    return (
      <img src={SongsIcon} className={props.className}/>
    )
}

export default Songs
