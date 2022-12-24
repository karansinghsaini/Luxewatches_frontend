import {React, useState} from "react";
import Leftmenu from "./leftmenu";
import Rightmenu from "./rightdata";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../css/home.css';

const Home = () => {
    var h = window.innerWidth;
    
    const [brands,setBrands] = useState([]);
    const [strap,setStrap] = useState([]);
    const [gender,setGender] = useState([]);
    const [price,setPrice] = useState('');

    const addFilter = (type,data) => {
        if (type === 'brand'){
            setBrands(brands.concat(data));
        }
        else if( type === 'strap'){
            setStrap(strap.concat(data));
        }
        else if( type === 'gender'){
            setGender(gender.concat(data));
        }
        else if( type === 'price'){
            setPrice(data);
        }
    };

    const removeFilter = (type,data) => {
        if (type === 'brand'){
            setBrands(brands.filter(item => item !== data));
        }
        else if( type === 'strap'){
            setStrap(strap.filter(item => item !== data));
        }
        else if( type === 'gender'){
            setGender(gender.filter(item => item !== data));
        }
        else if( type === 'price'){
            setPrice('');
        }
    };

    return(
    <MDBContainer>
        { (h>800) && <MDBRow >
            <MDBCol size='2'>
                <Leftmenu addFilter={addFilter} removeFilter={removeFilter}/>
            </MDBCol>
            <MDBCol className="rightdata_home">
                <h2>Shop Watches</h2>< br/>
                <Rightmenu brands={brands} strap={strap} gender={gender} price={price}/>
            </MDBCol>
        </MDBRow>}


        { (h<800) &&  <div className='row_container'>
            <MDBRow >
                <Leftmenu addFilter={addFilter} removeFilter={removeFilter}/>
                </MDBRow>
                <MDBRow>
                <h2>Shop Watches</h2>< br/>
                <Rightmenu brands={brands} strap={strap} gender={gender} price={price}/>
            </MDBRow>
        </div>
        }
    </MDBContainer>
    );
}

export default Home;