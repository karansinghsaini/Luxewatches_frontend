import {React, useState, useEffect} from 'react';
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
import Button from '@mui/material/Button';
import {Addwatches} from './addwatches';

export const Watchleftmenu = (props) => {

    const [optSmModal, setOptSmModal] = useState(false);
    const [showFilter,setShowFilter] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);
    const toggleShowFilter = () => setShowFilter(!showFilter);

    var h = window.innerWidth;

    const handleFilter = (data,type) => {
        setShowFilter(!showFilter);
        props.addFilter(type,data);
    };


    const handleClick = (data) =>{
        setShowFilter(!showFilter);
        props.changeDash(data);
    }


    const filter = (
        <div className='content'>
                <div className='head_admin_container'>
                <h4 className='head_admin_leftbar'>Watches</h4>
                </div><br />
                {/* <div className='watches_button' onClick={() => handleClick('add_watches')}>Add Watches</div> */}
                <div className="d-grid gap-2 watch_menu_button">
                    <Button style={{backgroundColor: '#1e3c71'}}  variant="contained" size="medium" onClick={toggleShow}>
                        Add Watches
                    </Button>
                </div>
                    { (props.dash === 'watches') &&  
                        <>
                        <h5 className='title_admin_leftbar'>Brands</h5>
                        <div className='left_admin_container' onClick={e =>  handleFilter('','brand')}>
                            <p className='circle'></p>
                            <p className='admin_left_list'>All</p>
                        </div>
                        <div className='left_admin_container' onClick={e =>  handleFilter('Rolex','brand')}>
                            <p className='circle'></p>
                            <p className='admin_left_list'>Rolex</p>
                        </div>
                        <div className='left_admin_container' onClick={(e) => handleFilter('Titan','brand')}>
                            <p className='circle'></p>
                            <p className='admin_left_list'>Titan</p>
                        </div>
                        <div className='left_admin_container' onClick={(e) => handleFilter('Police','brand')}>
                            <p className='circle'></p>
                            <p className='admin_left_list'>Police</p>
                        </div>
                        <div className='left_admin_container' onClick={(e) => handleFilter('Rado','brand')}>
                            <p className='circle'></p>
                            <p className='admin_left_list'>Rado</p>
                        </div>
                        </>
                        }
                    </div>
    );

    return(
        <>
        { (h<600) && <>
                <MDBBtn className='collapsible' color='light' onClick={e => setShowFilter(true)}>Filter Watches</MDBBtn>
                <MDBModal show={showFilter} tabIndex='-1' setShow={setShowFilter}>
                    <MDBModalDialog  centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                        <MDBModalTitle>Filter Watches</MDBModalTitle>
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

            <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                <MDBModalDialog size='lg'>
                <MDBModalContent>
                    <MDBModalHeader>
                    <MDBModalTitle>Create and manage your products</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <Addwatches toggleShow={toggleShow}/>
                    </MDBModalBody>
                </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
} 