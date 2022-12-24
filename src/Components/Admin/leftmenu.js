import {React, useState} from 'react';
import '../../css/admin/leftmenu.css';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
  } from 'mdb-react-ui-kit';
export const Leftmenu = (props) => {

    const [showFilter,setShowFilter] = useState(false);

    const toggleShowFilter = () => setShowFilter(!showFilter);
    var h = window.innerWidth;
    const handleClick = (data) =>{
        setShowFilter(!showFilter);
        props.changeType(data);
    }

    const filter = (
        <div className='content'>
            <div className='head_admin_container'>
                <h4 className='head_admin_leftbar'>Networks</h4>
                </div><br />
            <h5 className='title_admin_leftbar'>Registrants</h5>
                <div className='left_admin_container'  onClick={ e => handleClick('')}>
                    <p className='circle'></p>
                    <p className='admin_left_list'>All</p>
                </div>
            <h5 className='title_admin_leftbar'>Type</h5>
                <div className='left_admin_container'  onClick={ e => handleClick('admin')}>
                    <p className='circle'></p>
                    <p className='admin_left_list'>Admin</p>
                </div>
                <div className='left_admin_container' onClick={ e => handleClick('vendor')}>
                    <p className='circle'></p>
                    <p className='admin_left_list' >Vendors</p>
                </div>
                <div className='left_admin_container'  onClick={ e => handleClick('users')}>
                    <p className='circle'></p>
                    <p className='admin_left_list'>Users</p>
                </div>
        </div>
    )

    return(
        <>
        { (h<600) && <>
                <MDBBtn className='collapsible' color='light' onClick={e => setShowFilter(true)}>Filter Networks</MDBBtn>
                <MDBModal show={showFilter} tabIndex='-1' setShow={setShowFilter}>
                    <MDBModalDialog  centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                        <MDBModalTitle>Filter Networks</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShowFilter}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {filter}
                        </MDBModalBody>
                    </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal> 
            </>
            }

            {(h>600) && <div>
                {filter}
                </div>}
        </>
    );
} 