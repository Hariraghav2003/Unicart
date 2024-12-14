import React from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Productdetails.css";
import Navbar from '../Navbar/Navbar';
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate,useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footerex from '../Footer/Footerex';

function Productdetails() {
  const location = useLocation();
  const handlecart =(id) =>{
    console.log(id);
    navigate(`/cart/${id}`);
   }
  const loc=location.pathname;
  console.log(loc);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const { id } = useParams(); // Extract product ID from URL
    console.log(id);
  // Example product data (you can replace this with an API call or context)
  const products = [
    {
      id: "Harddisk",
      productimage: "./Harddisk.jpg",
      productimageone:"./Harddiskone.jpg",
      productimagetwo:"./Harddisktwo.jpg",
      productimagethree:"./Harddiskthree.jpg",
      title: "Hard Disk" ,
      productdescrption: "Seagate Expansion 1TB External HDD- USB 3.0 for Windows and Mac with 3 yr Data Recovery Services, Portable Hard Drive (STKM1000400)",
      productprice: "Price:₹ 4,500",
      productrating: "User Rating 4.5",
    },
    {
      id:"SSD",
      productimage:'./ssd.jpg',
      productimageone:"./ssdone.jpg",
      productimagetwo:"./ssdtwo.jpg",
      productimagethree:"./ssdthree.jpg",
      title:"SSD" ,
      productdescrption:"FRONTECH 128GB Internal SSD, 2.5 SATA3, TLC+SMI, Low Energy Consumption, Ultra Fast with Read/Write Speed Upto 500/480 Mbps (SSD-0054, Black)",
      productprice:"Price:₹ 3,500",
      productrating:"User Rating 3.5",
    },
    {
      id:"AntEsportsElite",
      productimage:'./Ant Esports Elite.jpg',
      productimageone:"./Ant Esports Eliteone.jpg",
      productimagetwo:"./Ant Esports Elitetwo.jpg",
      productimagethree:"./Ant Esports Elitethree.jpg",
      title:"Ant Esports Elite" ,
      productdescrption:"Ant Esports Elite 1100 Mid-Tower Computer Case/Gaming Cabinet - Black | Support ATX, M-ATX, ITX | Pre- Installed 3 x 120mm Front",
      productprice:"Price:₹ 1,500",
      productrating:"User Rating 3.8"
    },
    {
      id:"ViewSonic",
      productimage:'./Gamingmonitor.jpg',
      productimageone:"./Gamingmonitorone.jpg",
      productimagetwo:"./Gamingmonitortwo.jpg",
      productimagethree:"./Gamingmonitorthree.jpg",
      title:"ViewSonic" ,
      productdescrption:"ViewSonic (from USA) - VX2428 60.96 Cm (24 ) FHD IPS Monitor|Super Clear IPS Panel |180 Hz|1Ms Response time| HDR10| Srgb104%.",
      productprice:"Price:₹ 11,500",
      productrating:"User Rating 4.5"
		},
		{
      id:"LGFrostFree",
      productimage:'./fridge.jpeg',
      productimageone:"./fridgeone.jpg",
      productimagetwo:"./fridgetwo.jpg",
      productimagethree:"./fridgethree.jpg",
      title:"LG 655 L Frost Free ",
      productdescrption:"LG 655 L Frost Free Smart Inverter Double Door Side by Side Refrigerator (2023 Model, GL-B257HWBY, Western Black, Express Freezing | Multi Air-Flow)",
      productprice:"Price:₹ 13,500",
      productrating:"User Rating 4.5",
    },
		{ 
      id:"GodrejoneTonAc",
      productimage:'./AC.jpg',
      productimageone:"./Acone.jpg",
      productimagetwo:"./Actwo.jpg",
      productimagethree:"./Acthree.jpg",
      title:"Godrej 1 Ton Ac",
      productdescrption:"Godrej 1 Ton 3 Star, 5 Years Comprehensive Warranty, 5-In-1 Convertible Cooling, Inverter Split AC  1T EI 12TINV3R32-GWA Split, White)",
      productprice:"Price:₹ 15,500",
      productrating:"User Rating 4.5",
    },
    {
      id:"LGWashingMachine",
      productimage:'./Washingmachine.jpeg',
      productimageone:"./Washingmachineone.jpg",
      productimagetwo:"./Washingmachinetwo.jpg",
      productimagethree:"./Washingmachinethree.jpg",
      title:"LG Washing Machine",
      productdescrption:"LG 9 Kg, 5 Star, AI Direct Drive Technology, Steam, 6 Motion DD & Wi-Fi Fully-Automatic Front Load Washing Machine ",
      productprice:"Price:₹ 35,500",
      productrating:"User Rating 4.5"
    },
    {
      id:"Acer80cm",
      productimage:'./Tv.jpg',
      productimageone:"./Tv1.jpg",
      productimagetwo:"./Tv2.jpg",
      productimagethree:"./Tv3.jpg",
      title:"Acer 80 cm (32 inches)",
      productdescrption:"Acer 80 cm (32 inches) V Pro Series HD Ready Smart QLED Google TV AR32QDXGU2841AT (Black)",
      productprice:"Price:₹ 85,500",
      productrating:"User Rating 4.5"

    },
    {
      id:"CharismaticClassic",
      productimage:'./Menbrace.jpg',
      productimageone:"./Menbraceone.jpg",
      productimagetwo:"./Menbracetwo.jpg",
      productimagethree:"./Menbracethree.jpg",
      title:"Charismatic Classic",
      productdescrption:"Charismatic Classic Pure Stainless Steel Magnetic Bracelet for Mens & Boys, Classic all Magnets Energy Bracelet (Gold)",
      productprice:"Price:₹ 1,500",
      productrating:"User Rating 4.5"
    },
    {
      id:"Silvernaroring",
      productimage:'./Silvernaroring.jpg',
      productimageone:"./Silvernaroringone.jpg",
      productimagetwo:"./Silvernaroringtwo.jpg",
      productimagethree:"./Silvernaroringthree.jpg",
      title:"Silvernaro Ring",
      productdescrption:"CLARA Pure 925 Sterling Silver Nario Adjustable Ring |Gift for Men and Boys | Partial Matte Finish",
      productprice:"Price:₹ 1,500",
      productrating:"User Rating 4.5"
    },
    {
      id:"Sukkhi",
      productimage:'./Sukkhi.jpg',
      productimageone:"./Sukkhione.jpg",
      productimagetwo:"./Sukkhitwo.jpg",
      productimagethree:"./Sukkhithree.jpg",
      title:"Sukkhi",
      productdescrption:"Sukkhi Glamorous Gold Plated Choker Necklace Set Combo For Women",
      productprice:"Price:₹ 9,500",
      productrating:"User Rating 4.5"
    },
    { id:"Zenme",
      productimage:'./Zenme.jpg',
      productimageone:"./Zenmeone.jpg",
      productimagetwo:"./Zenmetwo.jpg",
      productimagethree:"./Zenmethree.jpg",
      title:"Zenme",
      productdescrption:"ZENEME Non-precious Metal Gold Plated and American Diamond Necklace Set & Bangles for Women & Girls",
      productprice:"Price:₹ 339",
     productrating:"User Rating 3.4"},
  ];

  // Find the product by ID
  const product = products.find((prod) => prod.id == id);
  const navigate = useNavigate();
   useEffect(() => {
    if (!product) {
      alert("Product out of Stock!!");
      navigate('/'); // Redirect to the home page
    }
  }, [product, navigate]); // Ensure useEffect reacts to product changes

  if (!product) {
    return null; // Prevent rendering if no product
  }

  
  return (
    <div>
    <Navbar></Navbar>
    <div className='productshow'>
      <div className='productimages'>
          <Image.PreviewGroup>
              <Image src={`/${product.productimage}`}/>
          </Image.PreviewGroup>
          
          <Image.PreviewGroup>
            <Image src={`/${product.productimageone}`}/>
          </Image.PreviewGroup>
          
          <Image.PreviewGroup>
              <Image src={`/${product.productimagetwo}`}/>
          </Image.PreviewGroup>
          <Image.PreviewGroup>
              <Image src={`/${product.productimagethree}`}/>
          </Image.PreviewGroup>
      </div>
      <div>
        <Slider {...settings} className='productimagescarousel'>
          
            <div>
              <Image.PreviewGroup>
                  <Image src={`/${product.productimage}`}/>
              </Image.PreviewGroup>
            </div>
            <div>
              <Image.PreviewGroup>
                  <Image src={`/${product.productimageone}`}/>
              </Image.PreviewGroup>
            </div>
            <div>
              <Image.PreviewGroup>
                  <Image src={`/${product.productimagetwo}`}/>
              </Image.PreviewGroup>
            </div>
            <div>
              <Image.PreviewGroup>
                  <Image src={`/${product.productimagethree}`}/>
              </Image.PreviewGroup>
            </div>
          </Slider>
      </div>
     <div>
      <div className='thumbnail'>
          <img src={`/${product.productimage}`} style={{width:200}} alt="err"/>
      </div>
      <div className='thumbnailmobile'>
          <Image.PreviewGroup>
            <Image src={`/${product.productimage}`} style={{width:200}} />
          </Image.PreviewGroup> 
          <Image.PreviewGroup>
            <Image src={`/${product.productimageone}`} style={{width:200}} />  
          </Image.PreviewGroup>
          <Image.PreviewGroup>
            <Image src={`/${product.productimagetwo}`}style={{width:200}} />
          </Image.PreviewGroup> 
          <Image.PreviewGroup>
            <Image src={`/${product.productimagethree}`}style={{width:200}} />
          </Image.PreviewGroup> 
      </div>
        <h1>{product.title}</h1>
        <p> {product.productrating} <FaStarHalfAlt style={{color:'yellow',fontSize:'20px',position:'absolute'}}></FaStarHalfAlt></p> <hr></hr>
          <p>{product.productdescrption}</p> <hr></hr>
          <p>Price: {product.productprice}</p>  
          <p>Inclusive of all taxes EMI starts at ₹250. No Cost EMI available </p><hr></hr> <br></br>
          <span className='link'>Buy Now</span> &nbsp;
          <span onClick={()=>handlecart(id)} style={{cursor:'pointer'}} className='link'>Add to cart</span>
          
     </div>

    </div> 
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <Footerex ></Footerex>
    </div>
  );
};

export default Productdetails;

