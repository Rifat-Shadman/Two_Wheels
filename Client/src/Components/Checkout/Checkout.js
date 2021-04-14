import React, { useContext } from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SelectedContext } from '../../App';

const Checkout = () => {
    const [selectedBike, setSelectedBike] = useContext(SelectedContext);
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        marginRight: '0.8em'
    }
    return (
        <Card className="text-center">
            <Card.Header>YOUR ORDER IS PLACED</Card.Header>
            <Card.Body>
                <Card.Title>{selectedBike.bikeName}</Card.Title>
                <Card.Text>
                    Price: ৳{selectedBike.price}
                </Card.Text>
                <Button variant="secondary" style={{alignItems:'flex-end'}}>
                     <Link style={linkStyle} to="/">Return to homepage</Link> 
                </Button>
            </Card.Body>
            <Card.Footer className="text-muted">TwoWheels</Card.Footer>
        </Card>
    );
};

export default Checkout;