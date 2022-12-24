import {React, useState, useEffect} from 'react';
import '../../css/admin/dashboard.css';
import { MDBSwitch, MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import Switch from '@mui/material/Switch';
import {MdDragIndicator} from 'react-icons/md';
import {GetUsers} from '../../redux/actions/useraction';
import { useDispatch,useSelector } from 'react-redux';
import {ChangeRole} from '../../redux/actions/useraction';

export const Admindashboard = (props) => {
    //const [type,setType] = useState(props.type);
    // getting the user data in useEffect
    const dispatch = useDispatch();
    useEffect (() => {
        
        dispatch(GetUsers(props.type));
        //setType(props.stype);
    },[props.type,dispatch]);

    const users = useSelector(  state => state.userReducer.users);
    console.log("In admin type:- " + props.type);
    console.log("In Admin Dash users:- " + users);

    const handleUnCheck = (e,id,type) => {
        console.log("Uncheck");
        dispatch(ChangeRole(id,type,false));
        dispatch(GetUsers(props.type));
    }

    const handleCheck = (e,id,type) => {
        console.log("Check");
        dispatch(ChangeRole(id,type,true));
        dispatch(GetUsers(props.type));
    }

//  user data in table format, creating rows.
    const data = users.map( user => {
        return(
            <tr key={user._id} className='dash_tr'>
                <td style={{width: '50%'}} className='dash_td'><img src='https://mdbootstrap.com/img/new/standard/city/047.webp' className='img-fluid  dash_img' alt='' />&nbsp;&nbsp;<span className='user_name'>{user.name}</span></td>

                {/* for false cases */}
                { (user.is_admin === false) && <td className='dash_td'><Switch  size="small" onClick={ e => handleCheck(e,user._id,'is_admin')} /></td>}

                { (user.is_admin === true ) && <td className='dash_td'><Switch  defaultChecked size="small" onClick={ e => handleUnCheck(e,user._id,'is_admin')}/></td>}

                { (user.is_vendor === false) && <td className='dash_td'><Switch size="small"  onClick={ e => handleCheck(e,user._id,'is_vendor')}/></td>}

                { (user.is_vendor === true) && <td className='dash_td'><Switch  defaultChecked size="small" className='switch_icon'  onClick={ e => handleUnCheck(e,user._id,'is_vendor')}/></td>}

                { (user.is_active === false) && <td className='dash_td'><Switch  size="small"  onClick={ e => handleCheck(e,user._id,'is_active')}/></td>}    

                { (user.is_active === true) && <td className='dash_td'><Switch  defaultChecked size="small" onClick={ e => handleUnCheck(e,user._id,'is_active')}/></td>}
        </tr>
        )
    });

    return (
        <>
            <div className='admin_dashboard_container'>
                <MDBTable striped hover>
                    <MDBTableBody>
                        <tr className='dash_tr'>
                            <th className='dash_td'>Name</th>
                            <th className='dash_td'>Admin</th>
                            <th className='dash_td'>Vendor</th>
                            <th className='dash_td'>Active</th>
                        </tr>
                        {data}
                        </MDBTableBody>
                </MDBTable>
            </div>
        </>
    );
};