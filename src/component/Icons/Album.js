import React from 'react'
import AlbumIcon from '../../assets/images/album.svg'

const Album = (props={}) => {
    return (
      <img src={AlbumIcon} className={props.className}/>
    )
}

export default Album
