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

return (
<div>
<div className='productcard'  onClick={() => handleCardClick(id)} style={{cursor:'pointer'}}>
  <Card style={{ width: ''}}>
    <Card.Img variant="top" src={productimage} />
    <Card.Body>
      <Card.Title style={{fontSize:15, paddingBottom:-10 ,fontWeight:"bold"}}> {cardtitle} </Card.Title>
      <Card.Text style={{width:200,height:160,marginBottom:-50,fontSize:13,marginLeft:-15,paddingLeft:10,fontFamily:"sans-serif",color:"#303841"}}>
            {cardtext}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" >
      <ListGroup.Item style={{fontSize:13,color:"red"}}>{carditem1}</ListGroup.Item>
      <ListGroup.Item style={{fontSize:13}}>{carditem2} <FaStarHalfAlt style={{color:'yellow',fontSize:'20px',position:'absolute'}}></FaStarHalfAlt></ListGroup.Item>
    </ListGroup> {" "} <br></br>
  </Card>
  </div>



  </div>

);
}
export default Cardex


