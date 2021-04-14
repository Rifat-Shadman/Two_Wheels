import React from 'react';
import { useContext } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { SelectedContext } from '../../App';
import './SingleBike.css'
const SingleBike = ({ bike }) => {
    const { imageURL, bikeName, price, stock } = bike;
    const selection = {
        bikeName: bikeName,
        price: price,
        stock: stock,
        imageURL: imageURL
    }
    const [selectedBike, setSelectedBike] = useContext(SelectedContext);

    setSelectedBike(selectedBike);
    const history = useHistory();

    function handleSelection(selection) {

        setSelectedBike(selection);
        console.log(selectedBike);
        history.push(`/shipment`)

    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card" style={{height:'max-content'}}>
                <img src={imageURL} alt="" />
                <div className="card-body">
                    <h5><b>{bikeName}</b></h5>
                    <h3>৳{price}</h3>
                    <button className="btn btn-info btn-lg buyButton" onClick={() => handleSelection(selection)}> Buy Now</button>
                </div>
            </div>
        </div>

        // <Card style={{ width: '18rem', margin:'1em' }}>
        //     <Card.Img variant="top" src={imageURL}  style={{ height: '15rem', padding: '1em 1em', border: '1px solid black' }}/>
        //     <Card.Body>
        //         <Card.Title>{bikeName}</Card.Title>
        //         <Card.Text>
        //             ${price}
        //         </Card.Text>
        //         <Button variant="primary" onClick={(e) => handleSelection(selection)}>Buy Now</Button>
        //     </Card.Body>
        // </Card>

        // // <div className="col-md-4 prod">
        // <Card style={{ width: '18rem', border: '1px solid black', margin: '10px' }} >
        //     <div>
        //         <Card.Img variant="top" src={imageURL} style={{ height: '15rem', padding: '1em 1em', border: '1px solid black' }} />
        //         <Card.Body style={{ width: '18rem', border: '1px solid black' }}>
        //             <Card.Title>{bikeName}</Card.Title>
        //         </Card.Body>
        //     </div>


        //     <div className="row" style={{ width: '18rem', border: '1px solid black', height: 'max-content' }}>
        //         <div className="col" style={{ width: '7rem', border: '1px solid black' }}>
        //             <h3>${price}</h3>
        //         </div>
        //         <div className="col" style={{ width: '7rem', border: '1px solid black' }}>
        //             <Link to="/shipment" >
        //                 <Button variant="primary" size="lg" block onClick={(e) => handleSelection(selection)}>Buy Now</Button>
        //             </Link>
        //         </div>
        //     </div>
        // </Card>



        // </div>

    );
};

export default SingleBike;