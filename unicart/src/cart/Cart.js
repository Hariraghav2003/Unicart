import React, { useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaStarHalfAlt } from 'react-icons/fa';
import './cart.css';
import Footerex from '../Footer/Footerex';
import Navbar from '../Navbar/Navbar';
import Badge from '@mui/material/Badge';
function Cart( {cart ,setCart}) { 
  const { id } = useParams(); // Extract product ID from URL
  const navigate = useNavigate();
  // const handlecart =(id) =>{
  //   console.log(id);
  //   navigate(`/cart/${id}`);
  //  }
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
  const product = products.find((prod) => prod.id == id); 
  useEffect(() => {
    if (!product) {
      alert("Product out of Stock!!");
      navigate('/'); // Redirect to the home page if product doesn't exist
    } else {
      setCart((prevCart) => {
        console.log('Previous Cart State:', prevCart);
        console.log('New Product:', product);
        // If you want to add or update the product in the cart with its ID as key
        return {
          ...prevCart,
          [product.id]:{...product}, // Add or update the product in the cart
        };
      });  
    }
  },[navigate]);
  if (!cart) {
    return <p>Loading...</p>; // Loading state
  }
  const ProductList = () => {
    return (
      <div>
       <h1 style={{textAlign:'center'}}>Your Cart</h1> 
       <div className='cards'>
        {Object.keys(cart).map(productId => {
          const product = cart[productId];
          return (
            <div key={product.id}>
              <Badge badgeContent={3} color="primary" style={{marginLeft:"20px",marginBottom:"-30px"}}>
                <div className="cartcard">
                  <img src={`/${product.productimage}`} style={{ width: 200 }} alt="product" />
                  <h1  style={{fontSize:15, paddingBottom:-10 ,fontWeight:"bold"}}>{product.title}</h1>
                  <span style={{width:200,height:160,marginBottom:-50,fontSize:13,marginLeft:0,textAlign:"justify"}}>{product.productdescrption.substring(0,100)}</span>
                  <hr/>
                  <span style={{fontSize:13,color:"red"}}>{product.productprice}</span> <br></br>
                  <span style={{fontSize:13}}>
                    {product.productrating} 
                    <FaStarHalfAlt style={{ color: 'yellow', fontSize: '20px', position: 'absolute' }} />
                  </span>
                  <br/>
                </div>
              </Badge> 
            </div>
          );
        })}
    
       </div>
      </div>
    );
  };
  const title = cart[product.id]?.title;

  console.log(title); // Output: "Hard Disk"
  
  return (
    <div>
    {/* <h2>Full Cart Data:</h2>
    <pre>{JSON.stringify(cart, null, 2)}</pre>  */}
    <Navbar></Navbar>
    <ProductList></ProductList> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <Footerex></Footerex>

  </div>


  );
}

export default Cart;
