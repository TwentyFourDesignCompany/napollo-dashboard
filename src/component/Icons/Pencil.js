import React from 'react'
import PencilIcon from '../../assets/images/pencil.svg'

const Pencil = (props={}) => {
    return (
      <img src={PencilIcon} className={props.className}/>
    )
}

export default Pencil