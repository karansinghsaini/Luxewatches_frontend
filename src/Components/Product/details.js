import {React, useState} from 'react';
import { MDBTable, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import {Redirect} from 'react-router-dom';
import '../../css/product/details.css';
import Button from '@mui/material/Button';

export const Details = () => {
    const [reviewNav,setReviewNav] = useState(false);

    const handleReview = () =>{
        setReviewNav(true);
    }

    if(reviewNav){
        return < Redirect to ={ {
            pathname: `/write_review/`
          }} 
          />;
    }

    return (
        <div className='details_container'>
            <h3>Product Details</h3><br/>
            <div className='details_table_cont'>
                <MDBTable striped>
                    <MDBTableBody>
                        <tr>
                        <td >Brand Name</td>
                        <td>Rolex</td>
                        </tr>
                        <tr>
                        <td >Model Name</td>
                        <td>Dude</td>
                        </tr>
                        <tr>
                        <td>Strap Type</td>
                        <td>Rubber</td>
                        </tr>
                        <tr>
                        <td>Ocassion</td>
                        <td>Formal</td>
                        </tr>
                        <tr>
                        <td>Dial Colour</td>
                        <td>Black</td>
                        </tr>
                        <tr>
                        <td>Display Type</td>
                        <td>Analog-Digital</td>
                        </tr>
                        <tr>
                        <td>Case Shape</td>
                        <td>Round</td>
                        </tr>
                        <tr>
                        <td>Special Features</td>
                        <td>Time Display</td>
                        </tr>
                        <tr>
                        <td>Warranty Type</td>
                        <td>Manufacturer</td>
                        </tr>
                        <tr>
                        <td>Movement</td>
                        <td>Quartz</td>
                        </tr>
                        <tr>
                        <td>Water Resistance Depth</td>
                        <td>100 m</td>
                        </tr>
                        <tr>
                        <td>Band size</td>
                        <td>Men Standard</td>
                        </tr>
                        <tr>
                        <td>Warranty</td>
                        <td>If this product is sold by Amazon, please review the manufacturer’s website for warranty information. If this product is sold by another party, please contact the seller directly for warranty information for this product. You may also be able to find warranty information on the manufacturer’s website.</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                </div>
                <div className='details_desc_cont'>
                    <h3>Product description</h3><br/>
                    <p className='details_desc'>"Case / bezel material: Stainless steel One-touch 3-fold Clasp Stainless Steel Band Mineral Glass Gray ion plated band Gray ion plated case 100-meter water resistance Double LED light LED light for the face (Auto LED light, Super illuminator, selectable illumination duration (1.5 seconds or 3 seconds), afterglow) LED backlight for the digital display (Auto LED light, Super illuminator, selectable illumination duration (1.5 seconds or 3 seconds), afterglow) Mobile link (Wireless linking using Bluetooth) Hand shift feature (Hands move out of the way to provide an unobstructed view of digital display contents) Flight mode World time 38 time zones (38 cities + coordinated universal time), daylight saving on/off, auto summer time (DST) switching, Home city/World time city swapping 1/1000-second stopwatch Measuring capacity: 00'00"00059'59"999 (for the first 60 minutes) 1:00'00"023:59'59"9 (after 60 minutes) Measuring unit: 1/1000 second (for the first 60 minutes) 1/10 second (after 60 minutes) Measuring modes: Elapsed time, lap time Countdown timer Measuring unit: 1 second Countdown range: 24 hours Countdown start time setting range: 1 second to 24 hours (1-second increments, 1-minute increments and 1-hour increments) 5 daily alarms Hourly time signal Full auto-calendar (to year 2099) 12/24-hour format Button operation tone on/off Schedule beeper on/off Date/month display swapping Day display (days of the week selectable in six languages) Regular timekeeping Analog: 2 hands (hour, minute (hand moves every 20seconds)), 1 dial (linked to each mode) Digital: Hour, minute, second, pm, month, date, day Accuracy: ±15 seconds per month (with no mobile link function) Approx. battery life: 2 years on CR2016"
                    </p>
                </div>
                <div className='details_desc_cont'>
                    <h4>Review this product</h4><br />
                    <p className='details_desc'>Share your thoughts with other customers</p> 
                    <Button style={{color: '#1E3C71'}} variant="outlined" size="medium" onClick={e => handleReview(e)}>
                        Write a product review
                    </Button><br/><br/>
                </div>
        </div>
    );
}