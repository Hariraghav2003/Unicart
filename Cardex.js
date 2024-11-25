import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./Cardex.css";
function Cardex({cardtitle,cardtext,carditem1,carditem2,productimage,id}) {
        
    const navigate = useNavigate();
  
    const handleCardClick = (id) => {
        console.log(id);
      navigate(`/product-details/${id}`); // Redirect to the specific product details page
    };
     const handlecart =(id) =>{
      console.log(id);
      navigate(`/cart/${id}`);
     }
return (
<div>
<div className='productcard'  onClick={() => handleCardClick(id)} style={{cursor:'pointer'}}>
  <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={productimage} />
    <Card.Body>
      <Card.Title style={{fontSize:25, paddingBottom:-10}}> {cardtitle} </Card.Title>
      <Card.Text style={{width:200,height:200,marginBottom:-50,fontSize:15,backgroundColor:'lightgrey',}}>
            {cardtext}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{carditem1}</ListGroup.Item>
      <ListGroup.Item>{carditem2} <FaStarHalfAlt style={{color:'yellow',fontSize:'20px',position:'absolute'}}></FaStarHalfAlt></ListGroup.Item>
    </ListGroup> {" "} <br></br>
  </Card>
  </div>
    <Card.Body className='purchasebuttons'>
        <Card.Link href="/about" className='cardlink'>Buy Now</Card.Link> &nbsp;
        <Card.Link onClick={()=>handlecart(id)} style={{cursor:'pointer'}} className='cardlink'>Add to cart</Card.Link>{" "} 
    </Card.Body>


  </div>

);
}
export default Cardex