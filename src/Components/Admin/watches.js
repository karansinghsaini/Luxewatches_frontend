import {React} from 'react';
import {Watchesdashboard} from './watches_dashboard';
import { BsSmartwatch } from 'react-icons/bs';
import '../../css/admin/user.css';

export const Watches = (porps) => {
    return(
        <div>
            <div className='user_admin_head_container'>
                <p className='user_admin_head'> <BsSmartwatch /> &nbsp; <span >Watches</span></p>
                <p className='user_admin_head_p' >Create, manage and distribute different types of watches.</p>
            </div>
            <div className='user_admin_onboard'>
                <p className='user_admin_circle'></p>
                <p className='admin_left_list user_admin_p'>Products</p>
            </div><br />
            <Watchesdashboard brands={porps.brands} strap={porps.strap} gender={porps.gender}/>
        </div>
    );
};