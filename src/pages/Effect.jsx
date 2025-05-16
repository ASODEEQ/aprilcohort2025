import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Effect = () => {

    // useEffect(()=>{
        //code effect
        //dependency array
    // })
    const [number, setnumber] = useState(0)
    const [name, setname] = useState('joshua')
    const [loading, setloading] = useState(true)
    const [allUsers, setallUsers] = useState([])


    useEffect(()=>{
        const makeRequest= async()=>{
            try {
                let response = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(response.data);
                setallUsers(response.data)
                setloading(false)
            } catch (error) {
                console.log(error);
                
            }   
        }
        makeRequest()
        // console.log('use effect ran');   
    }, [number, name])
  return (
    <div className=''>
        {/* <h1 onClick={()=>setnumber(number+1)}>{number}</h1> */}
        {/* <h1 onClick={()=>setname('adejare')}>{name}</h1> */}
        
        {loading? 
        
        (<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>)
        
        
        :
        
        (<div className='overall'>
            {allUsers.map((user, index)=>(
                <div key={index} style={{display:'flex', flexDirection: 'column', alignItems: 'center'}} className='items'>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <h1>{user.username}</h1>
                </div>
            ))}
        </div>)}
        
        
    </div>

  )
}

export default Effect