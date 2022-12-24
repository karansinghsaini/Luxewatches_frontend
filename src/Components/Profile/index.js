import {React, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { MDBRow, MDBCol,MDBContainer } from 'mdb-react-ui-kit';
import '../../css/profile.css';
import { Profileleft } from './leftside';
import {Address} from './address';
import {Password} from './password';
import {Profilepage} from './profile';
import { Wishlist } from './wishlist';
import { Cart } from './cart';
export const Profile = () => {

    const [dash,setDash] = useState("address")

    const changeDash = (new_dash) =>{
        setDash(new_dash);
        console.log(new_dash);
    }
    console.log(dash)
    return (
        <>
        <MDBContainer>
            <MDBRow>
                <MDBCol md={2}>
                    <Profileleft changeDash={changeDash} / >
                </MDBCol>
                <MDBCol md={10}>
                    { dash === 'profile' && <Profilepage />}
                    { dash === 'address' && <Address />}
                    { dash === "password" && <Password />}
                    { dash === "billing" && <Profilepage />}
                    { dash === "orders" && <Profilepage />}
                    { dash === "wishlist" && <Wishlist />}
                    { dash === "cart" && <Cart />}
                    { dash === "delete_account" && <Profilepage />}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </>
    );
}