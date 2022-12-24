import {React, useState, useEffect} from 'react';
import {Admindashboard} from './admin_dashboard';
import { IoGitNetworkOutline } from "react-icons/io5";
import '../../css/admin/user.css';


export const Users = (props) => {

    return(
        <div>
            <div className='user_admin_head_container'>
                <p className='user_admin_head'> <IoGitNetworkOutline /> &nbsp; <span >Networks</span></p>
                <p className='user_admin_head_p' >Manage Networks, teams, groups and audiences in various format.</p>
            </div>
            <div className=' user_admin_onboard'>
                <p className='user_admin_circle'></p>
                <p className='admin_left_list user_admin_p'>Onboards</p>
            </div><br />
            <Admindashboard type={props.type}/>
        </div>
    );
};