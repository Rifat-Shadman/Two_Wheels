import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddBike.css';



const AddBike = () => {
    // return(<h1>This is addbike</h1>);

    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null)
    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            bikeName: data.bikeName,
            price: data.bikePrice,
            stock: data.stock,
            imageURL: imageURL
        }
        const url = `https://floating-earth-74686.herokuapp.com/addBike`;
        console.log('event Data::  ', eventData);

        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))

        alert('New Item Added.')
        history.replace('/');

    }
    const handleImageUpload = event => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', 'f3c8081683b538b662d1ccfee9b6540c');
        imageData.append('image', event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Add A New Bike</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="formClass" >
                
                <label htmlFor="image">Upload image: </label>
                <input name="image" type="file" onChange={handleImageUpload} />

                <label htmlFor="bikeName">Bike Name</label>
                <input name="bikeName" defaultValue="bike Name" {...register('bikeName')} required />

                <label htmlFor="bikePrice">Unit Price: </label>
                <input name="bikePrice" defaultValue="0" type="number" {...register('bikePrice')} />

                <label htmlFor="stock">In Stock: </label>
                <input name="stock" defaultValue="0" type="number" {...register('stock')} />

                



                <input type="submit" />
            </form>
        </div>

    );
};


export default AddBike;