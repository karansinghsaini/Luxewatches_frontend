import {useSelector, useDispatch} from 'react-redux';
import {Nav} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
  } from "mdbreact";
import {GetUserProfile} from '../redux/actions/useraction';
import { decodeToken } from "react-jwt";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Menu = () => {
    const [open, setOpen] = React.useState(false);
    var isLoggedIn = localStorage.isloggedin;
    // decoding the token to get logged in user data
    const decodedToken = decodeToken(localStorage.token);
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const user_data = useSelector( (state) => state.userReducer.current_user);

    const handleClickOpen = (e) => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    useEffect( () => {
      if(decodedToken){
        dispatch(GetUserProfile(decodedToken.id));
      }
  },[]);

    const handleLogout = (e) => {
            localStorage.clear('jwtToken');
            localStorage.clear('isloggedin');
            window.location.href = '/login';
    }

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
      <MDBNavbar color="light" light expand="md">
        {/* <MDBNavbarBrand >
          <img  className="rounded float-left white-text" alt="aligment" />
        </MDBNavbarBrand> */}
        <MDBNavbarToggler  onClick={ e => toggleCollapse()}  />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem >
            <Nav.Link href="/home">Home</Nav.Link>
          </MDBNavItem>
         { (isLoggedIn && user_data.is_admin) && <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' style={{color: 'red'}}>
                  Admin
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/network">Network</MDBDropdownItem>
                  <MDBDropdownItem href="/products">Products</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> }
            { isLoggedIn && (user_data.is_vendor) && <MDBNavItem >
            <Nav.Link href="/products">Products</Nav.Link>
          </MDBNavItem>}

          

          </MDBNavbarNav>
          

          {/* Right side Nav links */}
          <MDBNavbarNav right >
            { isLoggedIn && <MDBNavItem>            
            <Nav.Link className="waves-effect waves-light"  href="/profile">
            <MDBIcon fas icon="user" />
              </Nav.Link>
            </MDBNavItem> }


          { isLoggedIn && <MDBNavItem>            
            <Nav.Link className="waves-effect waves-light" >
            <MDBIcon fas icon="shopping-cart" />
              </Nav.Link>
            </MDBNavItem> }

            { isLoggedIn && <MDBNavItem style={{paddingRight:"20px"}}>   
                <Nav.Link className="waves-effect waves-light"> 
                <MDBIcon fas icon="bell" />
                </Nav.Link>
            </MDBNavItem> }

            { isLoggedIn && <MDBNavItem>   
                <Nav.Link className="waves-effect waves-light">         
                 <MDBIcon icon="sign-out-alt" onClick={e => handleClickOpen(e)}/>
                </Nav.Link>
            </MDBNavItem> }

            { !isLoggedIn && <MDBNavItem>
              <Nav.Link className="waves-effect waves-light" href="/login">
                  Login
              </Nav.Link> 
            </MDBNavItem> }

            { !isLoggedIn && <MDBNavItem>
              <Nav.Link className="waves-effect waves-light" href="/register">
                  Register
              </Nav.Link> 
            </MDBNavItem> }

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>


      {/* modal to confirm logout. */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to logout?"}</DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={e => handleLogout(e)}>Yes</Button>
        </DialogActions>
      </Dialog>
      </>
    );
}