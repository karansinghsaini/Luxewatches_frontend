import {React} from 'react';
import { IoGitNetworkOutline } from "react-icons/io5";
import { BsSmartwatch } from 'react-icons/bs';
import '../../css/admin/sidebar.css';

const SideMenu = (props) => {

    const handleClick = (data) =>{
        console.log("Changed")
        props.changeDash(data);
    }

    return(
        <>
            <div className='admin_side_icons'><IoGitNetworkOutline onClick={() => handleClick('users')} /></div>
            <div className='admin_side_icons'><BsSmartwatch onClick={() => handleClick('watches')}/></div>
        </>
    );
}

export default SideMenu;