import {React,useState} from 'react';
import { Leftmanu } from './leftmenu';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Password } from './password';
import {Address} from './address';

export const Settings = () => {

    const [dash,setDash] = useState('address');

    const changeDash = (data) => {
        setDash(data);
    }

    
    var h = window.innerWidth;
    var size = '2';
    if(h < 600){
        size = '3'
    }

    return(
        <MDBContainer>
            <MDBRow style={{paddingTop: '50px'}}>
                <MDBCol size={size}>
                    <Leftmanu changeDash={changeDash}/>
                </MDBCol>
                <MDBCol>
                    { (dash === 'address') && <Address />}
                    { (dash === 'password') && <Password />}
                    
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}