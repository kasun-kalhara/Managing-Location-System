import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Createlocation() {

  const[Name,setName]= useState('')
  const[Address,setAddress]= useState('')
  const[Phone,setPhone]= useState('')
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8070/location/add',{Name,Address,Phone})
    .then(()=>{
      alert("Location added")
      navigate('/add')
    }).catch((err)=>{
      alert("err")
    })
         
  }
  return (
    <div className = "d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-3'>
    <form onSubmit={handleSubmit}>
         <div class="mb-3">
            <label for="Name"> Name</label>
            <input type="text" class="form-control" id="Name" placeholder="Enter Location Name"
            onChange={e=> setName(e.target.value)}
            />  
            
        </div>
        <div class="mb-3">
             <label for="Age">Address</label>
             <input type="text" class="form-control" id="Age" placeholder="Enter Address" 
             onChange={e=> setAddress(e.target.value)}
             />
        </div>

        <div class="mb-3">
             <label for="Gender">Phone</label>
             <input type="text" class="form-control" id="Gender" placeholder="Enter Phone No"
             onChange={e=> setPhone(e.target.value)}
             />     
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Createlocation;
