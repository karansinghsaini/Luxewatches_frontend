import {React, useEffect, useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import '../../css/login.css';
import {useDispatch} from 'react-redux';
import {Loginuser} from '../../redux/actions/useraction';
import Button from '@mui/material/Button';

const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        'email': email,
        'password': password
      }
      dispatch(Loginuser(data));
    };

    return (
      <div className='login_background'>
      <MDBContainer className='login_container'>
      <MDBRow className='login_row'>
        <MDBCol className='login_left_col' md="6">
          
        </MDBCol>
        <MDBCol className='login_right_col' md="6" >
          <form className='login_form'>
            <h4 className='text-center login_heading'>Luxerange</h4><br/><br/><br/><br/>
            <p className="h5 text-center mb-4 login_heading2">Welcome to Luxerange</p><br/><br/>
            <div className="grey-text login_form_div">
              <MDBInput
                label="Type your email"
                
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={ (e) => setEmail(e.target.value)}
              />
              <MDBInput
                label="Type your password"
             
                group
                type="password"
                validate
                onChange={ (e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
            <Button style={{backgroundColor: '#1E3C71'}}  variant="contained" size="medium" onClick={ e => handleSubmit(e)}>
                 Login
            </Button>
            </div><br/><br/>
          </form>
          <p className='text-center login_or'>------------ or ------------</p><br />
          {/* <div className='text-center'>
          <GoogleLogin 
            clientId="788786912619-k4tb19vgofvmn97q1vsti1u8fnf8j6pa.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle} >
          </GoogleLogin>
          </div><br /> */}
          <p className='text-center login_heading2'>New to Luxerange? <a href='/register'>Register</a></p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );
};

export default Login;