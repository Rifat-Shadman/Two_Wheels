import React from 'react';
import { useContext } from 'react';
import { SelectedContext, UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Shipment = () => {

    const [selectedBike, setSelectedBike] = useContext(SelectedContext);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit} = useForm();
    const history = useHistory()
    // console.log(selectedBike);
    
    // console.log(loggedInUser,  selectedBike)
    // console.log(orderData);


    const onSubmit =(shipmentData)=> {
        const orderData = { ...loggedInUser, ...selectedBike, ...shipmentData, data: new Date() };
        // orderData = {...orderData, data}
        console.log(orderData);

        fetch('https://floating-earth-74686.herokuapp.com/addOrder', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(data => {
            
        });


        alert('Order Submitted');
        history.push('/checkout');
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="formClass" >
            <label htmlFor="userName">Name</label>
            <input name="userName" defaultValue={loggedInUser.name} {...register('userName')} required />

            <label htmlFor="userEmail">Email: </label>
            <input name="userEmail" defaultValue={loggedInUser.email}  type="text" {...register('userEmail')} />

            <label htmlFor="userAddress">Address: </label>
            <input name="userAddress"   type="text" {...register('userAddress')} />

            <label htmlFor="userMobile">Mobile: </label>
            <input name="userMobile"   type="number" {...register('userMobile')} />

            <input type="submit" value="Place Order" />
        </form>
        </div>
    );
};

export default Shipment;