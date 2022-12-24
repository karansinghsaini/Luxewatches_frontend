import React, { useState } from 'react';
import {
  MDBInputGroup,
  MDBBtn,
  MDBTypography,
} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import '../../css/profile/address.css';

export const Address = () => {
    const [fname,setFirst] = useState('');
    const [lname,setLast] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAdd] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [pin,setPin] = useState();

    const handleSubmit = () => {
        console.log("Address");
    }

  return (
    <div className='address_container'>
      <MDBTypography variant='h4' className='head_address'>Update Your Address</MDBTypography>< br />
      <div className='address_body'>
      <MDBInputGroup className='mb-3'>
        <input className='form-control' placeholder='First Name' value={fname} type='text' onChange={e => setFirst(e.target.value)}/>
        <input className='form-control' placeholder='Last Name' value={lname} type='text' onChange={e => setLast(e.target.value)}/>
      </MDBInputGroup>
      <MDBInputGroup textBefore='Phone Number' className='mb-3'>
        <input className='form-control' type='number' value={phone} onChange={e => setPhone(e.target.value)}/>
      </MDBInputGroup>

      {/* <MDBInputGroup className='mb-3' textAfter='@example.com'>
        <input className='form-control' type='text' placeholder="Recipient's username" />
      </MDBInputGroup> */}

      <MDBInputGroup className='mb-3' textBefore='Address'>
        <input className='form-control' id='basic-url2' type='text' value={address} onChange={e => setAdd(e.target.value)}/>
      </MDBInputGroup>
      
      <MDBInputGroup className='mb-3' textBefore='City' textAfter='State'>
        <input className='form-control' placeholder='City' value={city} type='text' onChange={e => setCity(e.target.value)}/>
        <input className='form-control' placeholder='State' value={state} type='text' onChange={e => setState(e.target.value)}/>
      </MDBInputGroup>

      <MDBInputGroup className='mb-3' textBefore='Pin Code'>
        <input className='form-control' type='number' value={pin} onChange={e => setPin(e.target.value)}/>
      </MDBInputGroup>

      {/* <MDBInputGroup className='mb-3' textBefore='With textarea'>
        <textarea className='form-control' />
      </MDBInputGroup> */}
      <div className="d-grid gap-2" >
        <Button style={{backgroundColor: '#446baf'}} variant="contained" size="medium" onClick={handleSubmit}>Submit</Button>
      </div>
      </div>
    </div>
  );
}