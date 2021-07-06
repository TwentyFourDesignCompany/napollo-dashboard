import React from 'react'
import HomeIcon from '../../assets/images/home.svg'

const Home = (props={}) => {
    return (
      <img src={HomeIcon} className={props.className}/>
    )
}

export default Home
