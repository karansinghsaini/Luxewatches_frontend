import {React,useState, useEffect} from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import {
    MDBInputGroup
  } from 'mdb-react-ui-kit';

import '../../css/profile/cart.css';

  const Newaddress = () => {
    const [fname,setFirst] = useState('');
    const [lname,setLast] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAdd] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [pin,setPin] = useState();
    return(
        <div>
            <h6>Add New Address</h6>
            <MDBInputGroup className='mb-3'>
                <input className='form-control' placeholder='First Name' value={fname} type='text' onChange={e => setFirst(e.target.value)}/>
                <input className='form-control' placeholder='Last Name' value={lname} type='text' onChange={e => setLast(e.target.value)}/>
            </MDBInputGroup>
            <MDBInputGroup textBefore='Phone Number' className='mb-3'>
                <input className='form-control' type='number' value={phone} onChange={e => setPhone(e.target.value)}/>
            </MDBInputGroup>
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
        </div>
    );
};
 
const Payment = () => {
    const [fname,setFirst] = useState('');
    const [lname,setLast] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAdd] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [pin,setPin] = useState();
    return(
        <div>
            <h6>Credit or Debit Card</h6>
            <MDBInputGroup className='mb-3'>
                <input className='form-control' placeholder='Card Number' value={fname} type='number' onChange={e => setFirst(e.target.value)}/>
            </MDBInputGroup>
            <MDBInputGroup className='mb-3'>
                <input className='form-control' type='number' value={phone} placeholder='Expiry Number' onChange={e => setPhone(e.target.value)}/>
                <input className='form-control' id='basic-url2' type='text' placeholder='PIN' value={address} onChange={e => setAdd(e.target.value)}/>
            </MDBInputGroup>
            <MDBInputGroup className='mb-3' textBefore='Street Address'>
                <input className='form-control' id='basic-url2' type='text' value={address} onChange={e => setAdd(e.target.value)}/>
            </MDBInputGroup>
            
            <MDBInputGroup className='mb-3' >
                <input className='form-control' placeholder='City' value={city} type='text' onChange={e => setCity(e.target.value)}/>
                <input className='form-control' placeholder='State' value={state} type='text' onChange={e => setState(e.target.value)}/>
                <input className='form-control' type='number' placeholder='Zip Code' value={pin} onChange={e => setPin(e.target.value)}/>
            </MDBInputGroup>
        </div>
    );
};

export const Cart = () => {
    return (
        <MDBContainer>
            <MDBRow style={{paddingTop: '30px', paddingLeft:'10px'}}>
                <MDBCol md={9}>
                    <div>
                        <h3>Shipping Address</h3>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="address1" control={<Radio />} label="Karan 144 Westheimer Road, Santa Ana" />
                            <FormControlLabel value="address2" control={<Radio />} label="Karan 255 Cleaveland Avenue, Cleaveland" />
                            <FormControlLabel value="address3" control={<Radio />} label=<Newaddress /> >
                            </FormControlLabel>
                        </RadioGroup>
                    </div>
                    <div>
                        <h3>Payment Method</h3>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                        <FormControlLabel value="gpay" control={<Radio />} label="Google Pay" />
                        <FormControlLabel value="applepay" control={<Radio />} label="Apple Pay" />
                        <FormControlLabel value="paytm" control={<Radio />} label="Paytm" />
                        <FormControlLabel value="newpay" control={<Radio />} label=<Payment /> />
                        </RadioGroup>
                    </div>
                </MDBCol>
                <MDBCol>
                    <h5  style={{ paddingBottom: '30px' }} >Your Order</h5>
                    <div style={{ borderTop: 'groove 1px', paddingTop: '30px',borderBottom: 'groove 1px', paddingBottom: '20px' }}>
                        <h4>Rolex</h4>
                        <p>$12000 x 01</p>
                    </div>
                    <div style={{ borderTop: 'groove 1px', paddingTop: '30px',borderBottom: 'groove 1px', paddingBottom: '20px' }}>
                        <p>Delivery <span  className='cart_pad_cont'><b>$20</b>(Express)</span></p>
                        <p>Discount <span  className='cart_pad_cont'><b>$10</b></span></p>
                    </div>
                    <div style={{paddingTop: '30px' }}>
                        <h4>Total <span className='cart_pad_cont'>$12000</span></h4>
                    </div>
                    <div className="d-grid gap-2" style={{paddingTop: '30px'}} >
                        <Button style={{backgroundColor: '#446baf'}} variant="contained" size="medium" >
                            Place Order
                        </Button>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};