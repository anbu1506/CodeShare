import React from 'react';
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function Navbar1() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer tag="form" fluid className='justify-content-start'>
        <MDBBtn outline color="success" className='me-2' type='button'>
          Main button
        </MDBBtn>
        <MDBBtn outline color="secondary" size="sm" type='button'>
          Smaller button
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}