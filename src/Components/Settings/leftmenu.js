import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBTypography } from 'mdb-react-ui-kit';
import {Deleteaccount} from '../../redux/actions/useraction';
import '../../css/settings/leftside.css';

export const Leftmanu = (props) => {
    const dispatch = useDispatch();
    const user_data = useSelector( (state) => state.userReducer.current_user);

    const changeDash = (data) => {
        props.changeDash(data);
    }

    const DeleteAccount = () => {
        console.log("Deleting account")
        if (window.confirm("Are you sure you want to delete your account?")) {
            dispatch(Deleteaccount(user_data._id));
        }
    }

    return(
        <>
            <MDBTypography variant='h6' className="leftside_menu" onClick={e => changeDash("address")} >Address</MDBTypography>< br />
            <MDBTypography variant='h6' className="leftside_menu" onClick={e => changeDash("password")}>Change Password</MDBTypography>< br />
            <MDBTypography variant='h6' style={{color: 'red'}} className="leftside_menu" onClick={DeleteAccount}>Delete Account</MDBTypography>< br />
        </>
    );
}