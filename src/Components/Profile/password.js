import {React, useState} from 'react';
import { MDBInput, MDBTypography } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {ChangePassword} from '../../redux/actions/useraction';
import Button from '@mui/material/Button';

export const Password = () => {
    const dispatch = useDispatch();
    const [original,setOriginal] = useState('');
    const [new_pass,setNewpass] = useState('');
    const [new_pass1,setNewpass1] = useState('');
    const user_data = useSelector( (state) => state.userReducer.current_user);

    const ChangePass = () => {
        if (new_pass === new_pass1){
            const data = {
                'id': user_data._id,
                'password': original,
                'newPassword': new_pass
            }
            dispatch(ChangePassword(data));
        }
        else{
            alert("Your passwords don't match.")
        }
    }

    return (
        <div className='address_container'>
            <MDBTypography variant='h4' className='head_address'>Change Your Password.</MDBTypography>< br />
            <MDBInput label='Old Password' id='oldPassword' type='password' onChange={e => setOriginal(e.target.value)}/><br />
            <MDBInput label='New Password' id='newPassword' type='password' onChange={e => setNewpass(e.target.value)}/><br />
            <MDBInput label='Enter New Password Again' id='newPassword1' type='password' onChange={e => setNewpass1(e.target.value)}/><br />
            <div className="d-grid gap-2" >
            <Button style={{backgroundColor: '#446baf'}} variant="contained" size="medium" onClick={ChangePass}>
                Change Password
            </Button>
            </div>
        </div>
    );
};