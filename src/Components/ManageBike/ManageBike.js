
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { fireEvent } from '@testing-library/dom';
import { useHistory } from 'react-router';



const ManageBike = () => {

    const [bikes, setBikes] = useState([]);

    const history = useHistory();
    useEffect(() => {
        const url = "https://floating-earth-74686.herokuapp.com/bikes";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBikes(data);
            })
            .catch(err => {
                console.log(err);
            }

            )

    }, [])


    const handleEdit = (bike) => {
        alert('Editing database is not enabled');
    }

    const handleDelete = (bike) => {
        
        
        fetch(`https://floating-earth-74686.herokuapp.com/delete/${bike._id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Item Deleted')
            }
        })
        alert('Item Deleted. Click OK');
        history.replace('/');

       
    }

    return (
        <div className='m-4 p-4 g-3'>
            <Table striped bordered hover variant="light" className=" p-4" style={{border:'2px solid gray', marginRight:'3em'}}>
                <thead style={{textAlign:'center'}}>
                    <tr>

                        <th colSpan='1'>Bike Name</th>
                        <th>Unit Price</th>
                        <th colSpan='1'>Quantity</th>
                        <th>Edit/Remove</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    {
                        bikes.map(bike =>
                            <tr className="myContainer">
                                <td >{bike.bikeName}</td>
                                <td>{bike.price}</td>
                                <td>{bike.stock}</td>
                                <td >
                                    <FontAwesomeIcon icon={faEdit} style={{marginRight:'2em', color:'green'}} onClick={()=>handleEdit(bike)}></FontAwesomeIcon>    
                                    <FontAwesomeIcon icon={faTrash} style={{color:'red'}} onClick={()=>handleDelete(bike)}></FontAwesomeIcon>
                                </td>
                            </tr>

                        )


                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBike;