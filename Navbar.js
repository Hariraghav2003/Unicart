import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav>
        <ul>
             <Link to="/" style={{textDecoration:'none'}}> <li style={{fontFamily:'times new roman',fontSize:'30px',color:'red'}}> UniCart </li></Link> 
            <li>About Us</li> 
            <Link to="/product" style={{textDecoration:'none'}}> <li>Products</li> </Link>
            <li style={{paddingLeft:850}}> 
                <span style={{ paddingTop:10}}>< FaSearch size={19} style={{position:'absolute',top:'25px',right:'350px'}}  /> </span>
                <input type='text' id='search' style={{borderRadius:10,borderColor:'black'}}></input>
            </li>
            <li>Signin</li>
            <li>Signup</li>
        </ul>
    </nav>
  )
}

export default Navbar