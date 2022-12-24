import {React,useState} from 'react';
import Rating from '@mui/material/Rating';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { MDBFile } from 'mdb-react-ui-kit';
import '../../css/product/review.css';
import Button from '@mui/material/Button';

export const Review = () => {

    const [value, setValue] = useState(0);
    const [heading,setHeading] = useState('');
    const [img,setImg] = useState('');
    const [review,setReview] = useState('');

    const handleSubmit = () => {
        const data = {
            'rating': value,
            'heading': heading,
            'img_url': img,
            'review': review
        }
        console.log("Submitted!!:- " + data);
    }

    return(
        <div className='review_container'>

            <div className='review_ind_cont'>
                <h3 className='review_head'>Give us your valuable Review</h3><br />
                <p className='review_brand'>Rolex - Dude</p>
            </div><br />

            <div className='review_ind_cont'>
                <h5 className='review_head'>Overall rating</h5>
                <p>
                    <Rating
                        style={{paddingTop: '10px'}}
                        size="large"
                        name="simple-controlled"
                        value={value}
                        onChange={(e, newValue) => {
                        setValue(newValue)
                        }}
                    /> 
                </p>
            </div><br />

            <div className='review_ind_cont'>
                <h5 className='review_head'>Add a headline</h5><br />
                <MDBInput label='Text input' id='typeText' type='text' onChange={e => setHeading(e.target.value)} /><br />
            </div><br />

            <div className='review_ind_cont'>
                <h5 className='review_head'>Add a photo or video</h5>
                <p style={{ fontStyle: 'italic', fontSize: 'small' }}>Shoppers find images and videos more helpful than text alone.</p>
                <MDBFile id='customFile' /><br />
            </div><br />    

            <div className='review_ind_cont'>
                <h5 className='review_head'>Add a written review</h5><br />
                <MDBTextArea label='Message' id='textAreaExample' rows={4} onChange={e => setReview(e.target.value)} /><br />
            </div><br />
            <div className='review_ind_cont'>
                <Button style={{backgroundColor: '#1e3c71'}} variant="contained" size="medium" onClick={ e => handleSubmit(e)}>
                    Submit Review
                </Button>
            </div>
        </div>
    );
}