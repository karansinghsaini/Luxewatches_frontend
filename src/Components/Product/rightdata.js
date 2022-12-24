import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {MDBContainer,MDBRow,MDBCol,MDBIcon } from 'mdb-react-ui-kit';
import Rating from '@mui/material/Rating';
import Rolex from '../../images/watch_login.jpg';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../css/product/rightdata.css';


export const ProdData = (props) => {
    const [value, setValue] = useState(0);
    const [counter,setCounter] = useState(1);
    const [negalert,setNegAlert] = useState(false);
    const [open, setOpen] = useState(false);

    const handleCart = (e) =>{
        setOpen(false);
    }

    const handleNegAlert = () => {
        setNegAlert(!negalert);
    }

    const handleClose = (e) =>{
        setOpen(false);
    }



    return(
        <>
        <MDBContainer>
            <MDBRow style={{height:'auto'}}>
                <MDBCol md='6'>
                    <img
                        className='product_detail_image'
                        src={Rolex}
                        alt='...'
                    />
                    <span><MDBIcon far icon="heart" className='like_icon'/></span>
                </MDBCol>
                <MDBCol md='5'>
                    <div className='prod_right_container'>
                        <h2>Rolex - Dude</h2>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(e, newValue) => {
                            setValue(newValue);
                            }}
                        /> <span>6 ratings</span><br />
                        <span><sup>$</sup>1500</span><br />
                        <span style={{fontSize: 'small'}}>MRP:- $1500</span>
                        <p>Inclusive of all taxes</p>
                        <span><b>EMI</b> starts at $50. No Cost EMI available </span><br /><br />
                        <Button style={{backgroundColor: '#1E3C71'}} variant="contained" size="medium" onClick={e => setOpen(true)}>
                            Add to Cart
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button style={{backgroundColor: '#1E3C71'}} variant="contained" size="medium">
                            Buy Now
                        </Button><br />
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>


        {/* Dialog modal to add the product in the cart. */}
      <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      >
      <DialogTitle>{"Are you sure you want to add this watch to your cart?"}</DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p>Please select the quantity below.</p>
            <p  style={{fontSize: 'large'}}>
              <RemoveIcon onClick={e => ((counter-1) >0)? setCounter(counter-1):handleNegAlert()} className='home_cart_counter' />&nbsp;&nbsp;&nbsp;
              <span style={{fontFamily: 'serif'}}>{counter}</span> &nbsp;&nbsp;&nbsp;
              <AddIcon  className='home_cart_counter' onClick={e => setCounter(counter+1)} />
            </p>
            { negalert && <Alert severity='warning' onClose={() => handleNegAlert()}>The minimun quantity required is 1.</Alert>}
          </DialogContentText>
        </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCart}>Yes</Button>
      </DialogActions>
      </Dialog>
      </>
    );
};