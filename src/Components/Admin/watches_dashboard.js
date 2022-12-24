import {React, useState,useEffect} from 'react';
import '../../css/admin/dashboard.css';
import { useDispatch, useSelector } from "react-redux";
import {MdDragIndicator} from 'react-icons/md';
import {GetWatches} from '../../redux/actions/watchesaction';
import {MDBIcon, MDBTable, MDBTableBody} from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import {DeleteWatch} from '../../redux/actions/watchesaction';

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
  } from 'mdb-react-ui-kit';
import {Addwatches} from './addwatches';

export const Watchesdashboard = (props) => {
    const [optSmModal, setOptSmModal] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [watch_id,setWatchid] = useState();
    
    // console.log(props.strap)
    let brand = props.brands.toString();
    let strap = props.strap.toString();
    let gender = props.gender.toString();
    const watches = useSelector ( state => state.watchesReducer.watches);


    const toggleShow = () => setOptSmModal(!optSmModal);

    const handleClickOpen = (e,id) => {
        setWatchid(id);
        setOpen(true);
      };
  
      const handleClose = () => {
        setOpen(false);
      };

      const handleDelete = (e) => {
        console.log(watch_id);
        dispatch(DeleteWatch(watch_id));
        handleClose();
        dispatch(GetWatches(brand,strap,gender));
      };

      const handleEdit = (e,id) => {
        setWatchid(id);
        toggleShow()
      };
    
    useEffect ( () => {
        // console.log("Brand in Right:- " + strap);
        dispatch(GetWatches(brand,strap,gender));
    },[props.brands,props.strap,props.gender]);


    const watches_data = watches.map( watch => {
        return (
            <tr className='dash_tr' key={watch._id}>
                <td className='dash_td' style={{paddingleft: '10px'}} ><MdDragIndicator /><img src='https://mdbootstrap.com/img/new/standard/city/047.webp' className='img-fluid rounded dash_img' alt='' />&nbsp;&nbsp;{watch.model_name}</td>
                <td className='dash_td'>{watch.brand_name}</td>
                <td className='dash_td'><MDBIcon fas icon="edit" onClick={ e => handleEdit(e,watch._id)}/> 
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
                <MDBIcon fas icon="trash-alt" onClick={ e => handleClickOpen(e,watch._id)}/></td>
            </tr>
        )
    });

    return (
        <div className='admin_dashboard_container'>
            <MDBTable striped hover>
                <MDBTableBody>
                    <tr className='dash_tr'>
                        <th className='dash_td'>Product Name</th>
                        <th className='dash_td'>Brand</th>
                        <th className='dash_td'>Actions</th>
                    </tr>
                    {watches_data}
                </MDBTableBody>
            </MDBTable>

            {/* modal to confirm delete. */}
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Are you sure you want to delete this product?"}</DialogTitle>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={e => handleDelete(e)}>Agree</Button>
                </DialogActions>
            </Dialog>

            <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                <MDBModalDialog size='lg'>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Create and manage your products</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <Addwatches toggleShow={toggleShow} watch_id={watch_id}/>
                    </MDBModalBody>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
};