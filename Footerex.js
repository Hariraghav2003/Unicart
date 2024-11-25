import React from 'react';
import { Layout } from 'antd';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './Footer.css';
import { MdLocationPin } from "react-icons/md";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#000000',
};
const contentStyle = {


  color: '#fff',
  backgroundColor: '#212429',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#F60839',
};
const layoutStyle = {

  overflow: 'hidden',

};
const Footerex = () => (
  <div >

    <Layout style={layoutStyle}>
      <Header style={headerStyle}></Header>
      <Content style={contentStyle}>
      <div className='footer'>
        <div style={{width:500,marginLeft:20}}>
          <h2>Unicart</h2>
          <span style={{textAlign:'justify'}}>
          Unicart is an online platform that offers a wide range of products, 
          focusing on providing seamless shopping experiences for users. 
          It features a user-friendly interface, secure payment options, and fast delivery services.
          </span> <br></br> <br></br>
          <InstagramIcon></InstagramIcon> &nbsp;
          <FacebookIcon></FacebookIcon> &nbsp;
          <LinkedInIcon></LinkedInIcon> &nbsp;
          <XIcon></XIcon>
        </div>
        <div style={{textAlign:'justify'}}>
          <h2>Quicklinks</h2>
          <span style={{lineHeight:'2.0',}}>
           <Link to ="/" style={{color:'white'}}> Home</Link> <br></br> 
          <Link to ="/product"  style={{color:'white'}}> Products </Link>   <br></br>
            About Us <br></br>
          </span>
 
          
        </div>
        <div style={{textAlign:'justify',lineHeight:'1.5'}}>
          <h2>Contact info</h2>
          <span style={{lineHeight:'2.0'}}>
          <FaPhoneVolume style={{color:'white',fontSize:'15px'}} ></FaPhoneVolume> +91 789465710<br></br>
          <MdEmail style={{color:'white',fontSize:'17px'}} /> hariraghava21s@gmail.com <br></br>
          <MdLocationPin style={{color:'white',fontSize:'17px'}} /> India <br></br>
          </span>
        </div>
      </div>


      </Content>
      <Footer style={footerStyle}>Designed by Hariraghav</Footer>
    </Layout>

  </div>
);
export default Footerex;