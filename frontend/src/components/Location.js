import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Location(){

    const [Location,setLocation]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8070/location')  
        .then(res=> setLocation(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async(id)=>{
         try{
            await axios.delete('http://localhost:8070/location/delete/$id')
            window.location.reload()
         }catch(err){
            console.log(err);
         }
    }

    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded'>
                <Link to="/add" className='btn btn-success'>Add Location +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            Location.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.Name}</td>
                                    <td>{data.Address}</td>
                                    <td>{data.Phone}</td>
                                    <td>
                                       <button className='btn btn-danger' onClick={e =>handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>

                            ))
                         }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Location;









