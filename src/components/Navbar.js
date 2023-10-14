import { Reorder } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "../styles/Navbar.css"


const Navbar = () => {
   const [expandNavbar,setExpandNavbar]=useState(false)
   const navigate=useNavigate()

   useEffect(()=>{
    setExpandNavbar(false)
   },[navigate])

   
  return (
    <div className='navbar' id={expandNavbar?"open":"close"}>
      <div className='toggleButton'>
        <button onClick={()=>{
            setExpandNavbar((prev)=>!prev)
        }}>
           <Reorder/>
        </button>
      </div>
      <div className='links'>
         <Link to= "/">Home</Link>
         <Link to="/projects">Projects</Link>
         <Link to="/experience">Experience</Link>
         <Link to="/contacts" >Contacts</Link>
      </div>
    </div>
  )
}

export default Navbar
