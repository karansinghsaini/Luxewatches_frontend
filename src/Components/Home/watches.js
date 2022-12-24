import {React, useState} from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
} from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Alert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../css/home.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


export default function WatchCard (props) {
  const [counter,setCounter] = useState(1);
  const [negalert,setNegAlert] = useState(false);
  const [watchNav,setWatchNav] = useState(false);
  const [open, setOpen] = useState(false);


  const handleDetails = (e) => {
    setWatchNav(true);
  }

  const handleCart = (e) =>{
    setOpen(false);
  }

  const handleNegAlert = () => {
    setNegAlert(!negalert);
  }

  const handleClose = (e) =>{
    setOpen(false);
  }

  if(watchNav){
    return < Redirect to ={ {
        pathname: `/product_detail/${props.watch._id}`
      }} 
      />;
  }

  return (
    <>
    {/* Watch Card details. */}
      <MDBCard className='watch_card' style={{height: '400px'}}>
      <MDBCardImage src={props.watch.image_url} position='top' alt='...' style={{height:'200px', width:'150px', margin: 'auto'}} onClick={e => handleDetails(e)}/>
      <MDBCardBody>
        <MDBCardTitle>{props.watch.brand_name}</MDBCardTitle>
        <MDBCardText>{props.watch.model_name}</MDBCardText>
        <MDBCardText>
        ${props.watch.price}
        </MDBCardText>
          <MDBCardLink href='#'>Share</MDBCardLink>
          <MDBCardLink onClick={ e => setOpen(true)}>Add to Cart</MDBCardLink>
      </MDBCardBody>
    </MDBCard>

      {/* Dialog modal to add the product in the cart. */}
      <BootstrapDialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add to Cart
        </BootstrapDialogTitle>
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
      </BootstrapDialog>
    </>
  );
}