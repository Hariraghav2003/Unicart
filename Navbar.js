import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './Navbar.css';
import FadeMenu from './FadeMenu.js'

function Navbar() {
  return (
    <div>
    <div className="desktopnavbar">
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
    </div>
    <div className="mobilenavbar">
    <nav>
        <ul>
             <Link to="/" style={{textDecoration:'none'}}> <li style={{fontFamily:'times new roman',fontSize:'30px',color:'red',marginLeft:"-50px"}}> UniCart </li></Link> 
            <li>About Us</li> 
            <Link to="/product" style={{textDecoration:'none'}}> <li style={{paddingLeft:'20px'}}>Products</li> </Link>
            {/* <li> 
            <span style={{ paddingTop:10}}>< FaSearch size={19} style={{position:'absolute',top:'25px',right:'180px',}}  /> </span> &nbsp; &nbsp;
                <input type='text' id='search' style={{borderRadius:10,borderColor:'black',width:'100px'}}></input>
            </li>
            <li> <span style={{position:"relative",top:"25px",right:"20px"}}>   <FadeMenu></FadeMenu> </span> </li> */}
            <li style={{ position: 'relative' }}> 
              <span style={{ paddingTop: 10 }}>
                <FaSearch 
                  size={19} 
                  style={{ position: 'absolute', top: '5px', right: '110px' }}  
                /> 
              </span> 
              &nbsp; &nbsp;
              <input 
                type='text' 
                id='search' 
                style={{
                  borderRadius: 10, 
                  borderColor: 'black', 
                  width: '100px'
                }}
              />
            </li>
            <li style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-10px', right: '-30px' }}>   
                <FadeMenu />
              </span>
            </li>

        </ul>
    </nav>
    </div>
    </div>
   )
}

export default Navbar