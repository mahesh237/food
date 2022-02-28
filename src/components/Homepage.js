import React from 'react'
import Button from '@mui/material/Button';
import "../styles/homepage.css"
import { useNavigate } from 'react-router-dom';




function Homepage() {

const navigate = useNavigate()
function handleclick(){
  navigate("/menu")
}

  

  return (
    <div className='homepage-content'>
        <h1 > Welcome to Food's</h1>
      <h1>Kitchen</h1>
      <Button variant="contained"onClick={handleclick}>GO TO MENU</Button>
    </div>
  )
}

export default Homepage