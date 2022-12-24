import {React,useState} from 'react';
import '../../css/profile/leftmenu.css';

export const Profileleft = (props) => {

    const handleClick = (data) => {
        props.changeDash(data)
    };



    return(
        <div className='profile_left_cont'>
            <div className='left_profile_container' onClick={e => handleClick("profile")}>
                <p className='leftmenu_profile'>Profile</p>
            </div>
            <div className='left_profile_container' onClick={e => handleClick("orders")}>
                <p className='leftmenu_profile'>Purchases</p>
            </div>
            <div className='left_profile_container' onClick={e => handleClick("cart")}>
                <p className='leftmenu_profile'>Cart</p>
            </div>
            <div className='left_profile_container' onClick={e => handleClick("wishlist")} >
                <p className='leftmenu_profile'>Wishlist</p>
            </div>
            <div className='left_profile_container' onClick={e => handleClick("address")} >
                <p className='leftmenu_profile'>Address</p>
            </div>
            <div className='left_profile_container' onClick={e => handleClick("billing")} >
                <p className='leftmenu_profile'>Billing</p>
            </div>
            <div className='left_profile_container' onClick={e => handleClick("password")} >
                <p className='leftmenu_profile'>Change password</p>
            </div>
            <div className='left_profile_container' onClick={e => handleClick("delete_account")}>
                <p className='leftmenu_profile' style={{ color: 'red' }}>Delete Account</p>
            </div>
        </div>
    );
};