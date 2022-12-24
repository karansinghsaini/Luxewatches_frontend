import {React, useState, useEffect} from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import {Leftmenu} from './leftmenu';
import {Users} from './users';
import {Watches} from './watches';
import {Watchleftmenu} from './watch_leftmenu';
import {Addwatches} from './addwatches';
import '../../css/admin/index.css';

export const Admin = (props) => {
    
    const [dashboard,setDashboard] = useState(props.dashboard);
    const [type,setType] = useState('null');
    // changing state as per the user's request to see the data of admin, vendor or users.
    const changeType = (data) => {
        setType(data);
    }

    var h = window.innerWidth;  

    const [brands,setBrands] = useState('');
    const [strap,setStrap] = useState('');
    const [gender,setGender] = useState('');

    const addFilter = (type,data) => {
        if (type === 'brand'){
            setBrands(data);
            console.log("Brands:- " + brands);
        }
        else if( type === 'strap'){
            setStrap(data);
        }
        else if( type === 'gender'){
            setGender(data);
        }
    };


    // console.log("Index:- " + type);
    // changing the state to display the desired dashboard
    const changeDashboard = (data) =>{
        setDashboard(data);
    }

    return(
        <>
        { (h>600) &&  <div >
            <MDBRow>
                <MDBCol size='2' className='admin_right_container'>
                {dashboard === 'users' && <Leftmenu changeType={changeType}/>}
                {(dashboard === 'watches' || dashboard === 'add_watches') && <Watchleftmenu changeDash={changeDashboard} addFilter={addFilter} dash={dashboard}/>}
                </MDBCol>
                <MDBCol >   
                { dashboard === 'users' && <Users type={type} />}
                { dashboard === 'watches' && <Watches brands={brands} strap={strap} gender={gender} />}
                { dashboard === 'add_watches' && <Addwatches />}
                </MDBCol>
            </MDBRow>
            </div>
        }

        { (h<600) && <div className='row_container'>
            <MDBRow >
                {/* side menu for specific user and watches dashboard as per the user's choice. */}
                    {dashboard === 'users' && <Leftmenu changeType={changeType}/>}
                    {(dashboard === 'watches' || dashboard === 'add_watches') && <Watchleftmenu changeDash={changeDashboard} addFilter={addFilter} dash={dashboard}/>}
            </MDBRow><br />
            <MDBRow >
                    {/* display the dashboard as per user's choice */}
                    { dashboard === 'users' && <Users type={type} />}
                    { dashboard === 'watches' && <Watches brands={brands} strap={strap} gender={gender} />}
                    { dashboard === 'add_watches' && <Addwatches />}
            </MDBRow>
        </div>}
        
        </>
    );
}