import React from 'react'
import './Home.css'
import Carousel from './Carouselex';
import Navbar from '..//Navbar/Navbar.js';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Cardex from '../Cardex.js';
import { useNavigate } from 'react-router-dom';
import Footerex from '../Footer/Footerex.js';
import { HiTrendingUp } from "react-icons/hi";
import Cardtry from '../Cardsample.js';

function Home() {
  const navigate = useNavigate();
  const handlebackpackclick =()=>{
    navigate(`/backpack`); 
  }

      function LabTabs() {
        const [value, setValue] = React.useState('1');
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
      
        return (

          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Gadgets" value="1"  style={{color:"black"}}/>
                  <Tab label="Home Appliances"  style={{color:"black"}} value="2" />
                  <Tab label="Ornaments"  style={{color:"black"}} value="3" />
                </TabList>
              </Box>
              <TabPanel value="1"> 
                  <div className='tabcard'>
                  <Cardex 
                  id={"Harddisk"}
                  productimage={'./Harddisk.jpg'}
                  cardtitle="Hard Disk" 
                  cardtext="Seagate Expansion 1TB External HDD- USB 3.0 for Windows and Mac with 3 yr Data Recovery Services, Portable Hard Drive (STKM1000400)"
                  carditem1="Price:₹ 4,500"
                  carditem2="User Rating 4.5"> </Cardex>
                  <Cardex 
                  id={"SSD"}
                  productimage={'./ssd.jpg'}
                  cardtitle="SSD" 
                  cardtext="FRONTECH 128GB Internal SSD, 2.5 SATA3, TLC+SMI, Low Energy Consumption, Ultra Fast with Read/Write Speed Upto 500/480 Mbps (SSD-0054, Black)"
                  carditem1="Price:₹ 3,500"
                  carditem2="User Rating 3.5"
                  ></Cardex>
                  <Cardex 
                   id={"AntEsportsElite"}
                  productimage={'./Ant Esports Elite.jpg'}
                  cardtitle="Ant Esports Elite" 
                  cardtext="Ant Esports Elite 1100 Mid-Tower Computer Case/Gaming Cabinet - Black | Support ATX, M-ATX, ITX | Pre- Installed 3 x 120mm Front"
                  carditem1="Price:₹ 1,500"
                  carditem2="User Rating 3.8"
                  ></Cardex>
                  <Cardex 
                  id={"ViewSonic"}
                  productimage={'./Gamingmonitor.jpg'}
                  cardtitle="ViewSonic" 
                  cardtext="ViewSonic (from USA) - VX2428 60.96 Cm (24 ) FHD IPS Monitor|Super Clear IPS Panel |180 Hz|1Ms Response time| HDR10| Srgb104%."
                  carditem1="Price:₹ 11,500"
                  carditem2="User Rating 4.5"
                  ></Cardex>
            
                  </div>
      
              </TabPanel>
              <TabPanel value="2">
                  <div className='tabcard'>
                      <Cardex
                      id={"LGFrostFree"}
                      productimage={'./fridge.jpeg'}
                      cardtitle={"LG 655 L Frost Free "}
                      cardtext={"LG 655 L Frost Free Smart Inverter Double Door Side by Side Refrigerator (2023 Model, GL-B257HWBY, Western Black, Express Freezing | Multi Air-Flow)"}
                      carditem1="Price:₹ 13,500"
                      carditem2="User Rating 4.5"
                      ></Cardex>
                      <Cardex
                      id={"GodrejoneTonAc"}
                      productimage={'./AC.jpg'}
                      cardtitle={"Godrej 1 Ton Ac"}
                      cardtext={"Godrej 1 Ton 3 Star, 5 Years Comprehensive Warranty, 5-In-1 Convertible Cooling, Inverter Split AC  1T EI 12TINV3R32-GWA Split, White)"}
                      carditem1="Price:₹ 15,500"
                      carditem2="User Rating 4.5"
                      ></Cardex>
                      <Cardex
                      id={"LGWashingMachine"}
                      productimage={'./Washingmachine.jpeg'}
                      cardtitle={"LG Washing Machine"}
                      cardtext={"LG 9 Kg, 5 Star, AI Direct Drive Technology, Steam, 6 Motion DD & Wi-Fi Fully-Automatic Front Load Washing Machine "}
                      carditem1="Price:₹ 35,500"
                      carditem2="User Rating 4.5"
                      ></Cardex>
                      <Cardex
                      id={"Acer80cm"}
                      productimage={'./Tv.jpg'}
                      cardtitle={"Acer 80 cm (32 inches)"}
                      cardtext={"Acer 80 cm (32 inches) V Pro Series HD Ready Smart QLED Google TV AR32QDXGU2841AT (Black)"}
                      carditem1="Price:₹ 85,500"
                      carditem2="User Rating 4.5"
                      ></Cardex>
                    
                  </div>
              </TabPanel>
              <TabPanel value="3">
                  <div className='tabcard'>
                  <Cardex
                      id={"CharismaticClassic"}
                      productimage={'./Menbrace.jpg'}
                      cardtitle={"Charismatic Classic"}
                      cardtext={"Charismatic Classic Pure Stainless Steel Magnetic Bracelet for Mens & Boys, Classic all Magnets Energy Bracelet (Gold)"}
                      carditem1="Price:₹ 1,500"
                      carditem2="User Rating 4.5"
                      ></Cardex>
                  <Cardex
                      id={"Silvernaroring"}
                      productimage={'./Silvernaroring.jpg'}
                      cardtitle={"Silvernaro Ring"}
                      cardtext={"CLARA Pure 925 Sterling Silver Nario Adjustable Ring |Gift for Men and Boys | Partial Matte Finish"}
                      carditem1="Price:₹ 1,500"
                      carditem2="User Rating 4.5"
                      ></Cardex>
                  <Cardex
                      id={"Sukkhi"}
                      productimage={'./Sukkhi.jpg'}
                      cardtitle={"Sukkhi"}
                      cardtext={"Sukkhi Glamorous Gold Plated Choker Necklace Set Combo For Women"}
                      carditem1="Price:₹ 9,500"
                      carditem2="User Rating 4.5"
                      ></Cardex>
                  <Cardex
                      id={"Zenme"}
                      productimage={'./Zenme.jpg'}
                      cardtitle={"Zenme"}
                      cardtext={"ZENEME Non-precious Metal Gold Plated and American Diamond Necklace Set & Bangles for Women & Girls"}
                      carditem1="Price:₹ 339"
                      carditem2="User Rating 3.4"
                      ></Cardex>
                  </div>
              </TabPanel>
            </TabContext>
          </Box>
        );
      }
  return (
    <div> 
        <Navbar></Navbar>  
        <div className='products'>
            <ul>
                <li onClick={() => handlebackpackclick()} style={{cursor:'pointer'}} >
                    <img src='./backpack.jpg' alt='backpack'></img> <br></br>
                    <span className='backpacktext'> Backpacks </span>
                </li>

                <li>
                    <img src='./dress.jpg' alt='backpack'></img> <br></br>
                    <span className='jackettext'> Jackets </span>
                </li>
                <li>
                    <img src='./ornaments.jpg'alt='backpack'></img> <br></br>
                    <span className='ornamentstext'> Ornaments </span>
                </li>
                <li>
                    <img src='./electronics.jpg'alt='backpack'></img> <br></br>
                    <span className='gadgetstext'> Gadgets </span>
                </li>
                <li className="category">
                    <img src='./Homeappliance.jpg'alt='backpack' style={{paddingLeft:"15px"}}></img>  <br></br>
                    <span style={{paddingTop:-10,paddingLeft:10}}> Homeappliance </span>
                </li>
                <li className="category">
                    <img src='./toys.jpg'alt='backpack'></img><br></br>
                    <span style={{paddingTop:-10,paddingLeft:25}}> Toys </span>
                </li>
                <li className="category">
                    <img src='./Grocery.jpeg'alt='backpack'></img><br></br>
                    <span style={{paddingTop:-10,paddingLeft:15}}> Grocery </span>
                </li>
            </ul>
        </div> <br></br> <br></br> 
        <Carousel></Carousel> <br></br> <br></br> <br></br> <br></br> <br></br>
        <div className='homepagetext'>
            <img src="./elegantone.jpg" alt="elegant" className='elegantone'></img>  
            <span className='homepagetextone'>  Our Top Categories</span>
            <img src="./eleganttwo.jpg" alt="elegant" className='eleganttwo'></img>  
        </div>
        <br></br>
        <div className='tab'> 
            <LabTabs></LabTabs>
        </div> <br></br>
        <h1>Best-Sellers  <HiTrendingUp style={{fontSize:40 ,position:'absolute'}}></HiTrendingUp> </h1> <hr></hr> <br></br>
        <div className='bestsellerscard'>
            <Cardex 
                   id={"AntEsportsElite"}
                  productimage={'./Ant Esports Elite.jpg'}
                  cardtitle="Ant Esports Elite" 
                  cardtext="Ant Esports Elite 1100 Mid-Tower Computer Case/Gaming Cabinet - Black | Support ATX, M-ATX, ITX | Pre- Installed 3 x 120mm Front"
                  carditem1="Price:₹ 1,500"
                  carditem2="User Rating 3.8">
            </Cardex>
            <Cardex
                id={"CharismaticClassic"}
                productimage={'./Menbrace.jpg'}
                cardtitle={"Charismatic Classic"}
                cardtext={"Charismatic Classic Pure Stainless Steel Magnetic Bracelet for Mens & Boys, Classic all Magnets Energy Bracelet (Gold)"}
                carditem1="Price:₹ 1,500"
                carditem2="User Rating 4.5">
            </Cardex>
            <Cardex 
                id="safarizest"
                productimage='./safarizest.jpg'
                cardtitle="Safari Zest" 
                cardtext="Urban Jungle by Safari Zest Daypack 20 Liters Water Resistant, Top-Open, Padded, Premium Microfibre Laptop Backpack with Trolley Sleeve for Men and Women, White"
                carditem1="Price:₹ 5,500"
                carditem2="User Rating 4.5"> 
            </Cardex>
            <Cardex 
            id="JADEN 40L"
            productimage='./JADEN40L.jpg'
            cardtitle="JADEN 40L" 
            cardtext="FUR JADEN 40L Weekender Travel Laptop Backpack with Anti Theft Pocket, Organizer, 15.6 Inch Padded Laptop Sleeve and Dual Handles"
            carditem1="Price:₹ 4,500"
            carditem2="User Rating 4.5"> </Cardex>
            <Cardex
            id="Silvernaroring"
            productimage='./Silvernaroring.jpg'
            cardtitle="Silvernaro Ring"
            cardtext="CLARA Pure 925 Sterling Silver Nario Adjustable Ring |Gift for Men and Boys | Partial Matte Finish"
            carditem1="Price:₹ 1,500"
            carditem2="User Rating 4.5">
            </Cardex>
            <Cardex 
                id="ViewSonic"
                productimage='./Gamingmonitor.jpg'
                cardtitle="ViewSonic" 
                cardtext="ViewSonic (from USA) - VX2428 60.96 Cm (24 ) FHD IPS Monitor|Super Clear IPS Panel |180 Hz|1Ms Response time| HDR10| Srgb104%."
                carditem1="Price:₹ 11,500"
                carditem2="User Rating 4.5">
            </Cardex>
        </div>
        <br></br> <br></br> <br></br> <br></br>
        <Footerex></Footerex>
     
    </div>
  )
}

export default Home