import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Effectpractice = () => {
    const [name, setname] = useState('lekan')
    const [number, setnumber] = useState(0)

  return (
    <div>
        <h1 onClick={()=>setname('sodiq')}>{name}</h1>
        <h1 onClick={()=>setnumber(number+1)}>{number}</h1>
        
    </div>
  )
}

export default Effectpractice