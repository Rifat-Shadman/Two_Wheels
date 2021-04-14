import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddBike from '../AddBike/AddBike';
import SingleBike from '../SingleBike/SingleBike';
import './Shop.css'
const Shop = () => {

    const [bikes,setBikes] = useState([]);

    useEffect(() => {
        const url = "https://floating-earth-74686.herokuapp.com/bikes";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBikes(data);
        })
        .catch(err=>{
            console.log(err);
        }
            
        )

    },[])
    return (
        <div >
            <div className="row my-container">
                { 
                    bikes.map(bike => <SingleBike
                        key={bike._id}
                        showAddToCart={true}
                        bike={bike}></SingleBike>) 
                }

 
            </div>

            <hr/>
        </div>
    );
};

export default Shop;