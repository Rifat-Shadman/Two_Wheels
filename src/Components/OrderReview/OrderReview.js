import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Table } from 'react-bootstrap';

const OrderReview = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        const url = "https://floating-earth-74686.herokuapp.com/orderReview?email="+loggedInUser.email;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
        .catch(err=>{
            console.log(err);
        }
            
        )

    },[])


    
    return (
        <div>
            <h1>Hello, {loggedInUser.name}!</h1>
            <h5>Your have {orders.length} orders</h5>


            <Table striped bordered hover variant="light" className=" p-4" style={{border:'2px solid gray', marginRight:'3em'}}>
                <thead style={{textAlign:'center'}}>
                    <tr>

                        <th colSpan='1'>Bike Name</th>
                        <th>Unit Price</th>
                        <th colSpan='1'>Ship to:</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    {
                        orders.map(order => 
                            <tr>
                                <td >{order.bikeName}</td>
                                <td>{order.price}</td>
                                <td>{order.userAddress}</td>
                                <td >
                                    {new Date(order.data).toDateString('dd/MM/yyyy')}
                                </td>
                            </tr>
                        )

                    }   


                    
                </tbody>
            </Table>
        </div>
    );
};

export default OrderReview;