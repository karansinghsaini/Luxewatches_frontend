import {React} from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBTextArea
  } from 'mdb-react-ui-kit';
  import Button from '@mui/material/Button';
  import '../../css/profile/profile.css';

export const Profilepage = () => {
    return (
        <div className='profile_container'>
            <h2>James Cook</h2><br/>
            <h6>Personal Info</h6><br/>
            <MDBRow className='mb-4'>
                <MDBCol>
                <MDBInput id='fn' label='First name' />
                </MDBCol>
                <MDBCol>
                <MDBInput id='ln' label='Last name' />
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-4'>
                <MDBCol>
                <MDBInput id='fn' label='Email' />
                <p style={{ fontWeight: 'lighter', color: 'grey', fontSize: 'small' }} >Check your inbox to confirm the ownership of this email.</p>
                </MDBCol>
                <MDBCol>
                    <p style={{color: 'grey', fontWeight: 'lighter', fontSize: 'small'}} >Didn't get a verification code? <a href='/profile' style={{ color: '#1E3C71'}}>Send Again</a></p>
                </MDBCol>
            </MDBRow>
            <MDBTextArea label='Bio' id='bio' rows={4} />
            <p style={{ fontWeight: 'lighter', color: 'grey', fontSize: 'small' }} >Brief description about your profile.</p><br/>

            <h6>Social Profiles</h6><br/>
            <MDBInput id='fb' label='Facebook' /><br/>
            <MDBInput id='insta' label='Instagram' /><br/>
            <MDBInput id='twitter' label='Twitter' /><br/>  
            <div className="d-grid gap-2" >
                <Button style={{backgroundColor: '#1E3C71'}} type='submit' variant="contained" size="medium">
                    Update Profile
                </Button>
            </div><br/>
        </div>
    );
}
