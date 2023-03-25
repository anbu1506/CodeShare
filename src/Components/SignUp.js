import React, {  useState } from 'react';
import  "./SignUp.css"; 
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

function SignUp() {

          const [username,setName]=useState("");
          const [mail,setEmail]=useState("");
          const [pass,setpass]=useState("");
          const userId=null;
          const data ={userId,mail,pass,username}
          const register=()=>{
            fetch("http://localhost:8080/api/signup",{
                method:"Post",
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(data)
            })
            .then((res)=>{
                return res.text();
            }).then((re)=>{alert(re)});
          }

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput onChange={(e)=>setName(e.target.value)} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput onChange={(e)=>setEmail(e.target.value)} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput onChange={(e)=>setpass(e.target.value)} wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
          <Button className='btn' onClick={register}>Register</Button>
          <div>
            <label>already have an account ?<Link to="/">Login here</Link></label>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;