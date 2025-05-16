import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const About = () => {
  const count = useSelector((state)=>{console.log(state.counter)})

  return (
    <div>This is the About page</div>
  )
}

export default About