import {React, useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import '../../css/login.css';
import {useDispatch} from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const Login = () => {
  
  const [open, setOpen] = useState(false);
    
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [password2,setPassword2] = useState();

    const dispatch = useDispatch();
    

    const handleClose = () => {
      setOpen(false);
      window.location.href = ('/login')
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if(password !== password2){
        alert("Passwords dont match");
      }
      else{
        setOpen(true);
        const data = {
          'name': username,
          'email': email,
          'password': password
        }
        axios.post('/luxerange/signup', data)
        .then(function (response) {
          console.log("Status:- " + response.status);
          dispatch({type: 'REGISTER', payload: response});
        })
        .catch(function (error) {
          console.log(error);
        });
        }
      };

    const responseGoogle = (response) => {
      // console.log(response);
      // var res = response.profileObj;
      // debugger;
      // this.signup(response);
          };

    return (
      <div className='login_background'>
      <MDBContainer className='login_container'>
      <MDBRow className='login_row'>
        <MDBCol className='login_left_col' md="6">
          
        </MDBCol>
        <MDBCol md="6" className='login_right_col' >
          <form className='login_form' onSubmit={handleSubmit}>
            <h4 className='text-center login_heading'>Luxerange</h4><br/><br/>
            <p className="h5 text-center mb-4 login_heading2">Welcome to Luxerange</p><br/>
            <div className="grey-text login_form_div">
            <MDBInput
                label="Type your username"
            
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={ (e) => setUsername(e.target.value)}
              />
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
              <MDBInput
                label="Re-type your password"

                group
                type="password"
                validate
                onChange={ (e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="text-center">
            <Button style={{backgroundColor: '#1E3C71'}} variant="contained" size="medium" onClick={ e => handleSubmit(e)}>
            Register
            </Button>
            </div><br/>
          </form>
          <p className='text-center login_or'>------------ or ------------</p>
          {/* <div className='text-center'>
          <GoogleLogin 
            clientId="788786912619-k4tb19vgofvmn97q1vsti1u8fnf8j6pa.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle} >
          </GoogleLogin>
          </div><br /> */}
          <p className='text-center login_heading2'>New to Luxerange? <a href='/login'>Login</a></p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Please Verify Your Email"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Almost done! We've sent an email to {email}. Please click the link and follow the steps to finialize your account confirmation.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
    );
};

export default Login;