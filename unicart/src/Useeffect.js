import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./Useeffect.css"
function Useeffect() {
  function Cardapi({cardtitle,cardtext,carditem1,carditem2,productimage,id}) {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        console.log(id);
      navigate(`/product-details/${id}`); // Redirect to the specific product details page
    };
return (
  <div>
    <div onClick={() => handleCardClick(id)} style={{cursor:'pointer'}} className='cardone'>
      <Card style={{ width: ''}}>
        <Card.Img variant="top" src={productimage} />
        <Card.Body>
          <Card.Title style={{fontSize:15, paddingBottom:-10 ,fontWeight:"bold"}}> {cardtitle.substring(0,20)}  </Card.Title> 
          <Card.Text  style={{width:200,height:160,marginBottom:-50,fontSize:13,marginLeft:-15,paddingLeft:10}}>
                {cardtext.substring(0,100)}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{fontSize:13}}>Price: ${carditem1}</ListGroup.Item>
          <ListGroup.Item style={{fontSize:13}}>Userrating: {carditem2} <FaStarHalfAlt style={{color:'yellow',fontSize:'20px',position:'absolute'}}></FaStarHalfAlt></ListGroup.Item>
        </ListGroup> {" "} <br></br>
      </Card>
    </div>
  </div>

);
}
  // State to store the products
  const [productList, setProductList] = useState([]);
  const [loading,setLoading] = useState(true);
  // const[error,setError]=useState();
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        setProductList(products); // Update the state with fetched data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(true); 
        // setError(true); // Set error state to true when fetching data fails
      }
    };
    fetchdata();
  }, []); // Empty dependency array ensures this runs only once
  if(loading){
    return <h2>Loading...</h2> // To Show loading message while fetching data

  }  
  return (
    <div className='cardapi'>
      {productList.map((product) => (
        <div key={product.id}>  
        <Cardapi
            id={product.id}
            productimage={product.image}
            cardtitle={product.title}
            cardtext= {product.description}
            carditem1={product.price}
            carditem2={product.rating.rate}> 
        </Cardapi>
        </div>
      ))}
    </div>
  );
}
export default Useeffect;
