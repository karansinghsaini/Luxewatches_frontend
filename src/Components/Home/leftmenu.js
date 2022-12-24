import React, {useState} from "react";
import '../../css/leftmenu.css';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
  } from 'mdb-react-ui-kit';
  import { useDispatch, useSelector } from "react-redux";

const Leftmenu = (props) => {

    const [rolex, setRolex] = useState(false);
    const [police, setPolice] = useState(false);
    const [ rado,setRado] = useState(false);
    const [ titan,setTitan] = useState(false);
    const [ timex,setTimex] = useState(false);
    const [ male,setMale] = useState(false);
    const [ female,setFemale] = useState(false);
    const [ kid,setKid] = useState(false);
    const [ rubber,setRubber] = useState(false);
    const [ metal,setMetal] = useState(false);
    const [hightolow,setHightolow] = useState(false);
    const [lowtohigh,setLowtohigh] = useState(false);
    const [showFilter,setShowFilter] = useState(false);
    const [reset,setReset] = useState(false);
    const [brands,setBrands] = useState([]);
    const brands_filter = useSelector((state) => state.watchesReducer.brands);

    const toggleShowFilter = () => setShowFilter(!showFilter);
    var h = window.innerWidth;

    const handleClick = (data,check,type) => {
        if (check === true){
            props.addFilter(type,data);
        }
        else{
            props.removeFilter(type,data);
        }
    };

    const handleBrandClick = (data,type) => {
        if (brands.includes(data)){
            setBrands(brands.filter(item => item !== data));
            props.removeFilter(type,data);
        }
        else{
            setBrands(brands.concat(data));
            props.addFilter(type,data);
            // props.addFilter(type,brands);
        }
    };

    const filter2 = brands_filter.map( brand => {
        return(
            <>
                <input type="checkbox" id="rolex" name="Rolex" value="Rolex" onChange={e => {handleBrandClick(brand,'brand')}}></input>&nbsp;
                <label className="home_leftmenu_filter">{brand}</label><br />
            </>
        )
    })

    const filter = (
        <div className="leftmenu_container">
            { (h>800) && <h3 className="filter_leftmenu">Filter</h3>}

            <h5 className="filter_head">Brands</h5>

                {/* <input type="checkbox" id="rolex" name="Rolex" value="Rolex" checked={rolex} onChange={e => {setRolex(!rolex);handleClick('Rolex',!rolex,'brand')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Rolex</label><br />
                
                <input type="checkbox" id="rolex" name="Police" value="Police" checked={police} onChange={(e) => {setPolice(!police);handleClick('Police',!police,'brand')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Police</label><br />

                <input type="checkbox" id="rolex" name="Rado" value="Rado" onChange={(e) => {setRado(!rado);handleClick('Rado',!rado,'brand')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Rado</label><br />

                <input type="checkbox" id="rolex" name="Times" value="Timex" onChange={(e) => {setTimex(!timex);handleClick('Timex',!timex,'brand')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Timex</label><br />

                <input type="checkbox" id="rolex" name="Titan" value="Titan" onChange={(e) => {setTitan(!titan);handleClick('Titan',!titan,'brand')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Titan</label><br /> */}
                {filter2}


            <h5 className="filter_head">Strap Type</h5>

                <input type="checkbox" id="rolex" name="Rubber" value="Rubber" onChange={(e) => {setRubber(!rubber);handleClick('rubber',!rubber,'strap')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Rubber</label><br />

                <input type="checkbox" id="rolex" name="Metal" value="Metal" onChange={(e) => {setMetal(!metal);handleClick('metal',!metal,'strap')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Metal</label><br />


            <h5 className="filter_head">Suitable For</h5>

                <input type="checkbox" id="rolex" name="Men" value="Men" onChange={(e) => {setMale(!male);handleClick('male',!male,'gender')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Men</label><br />

                <input type="checkbox" id="rolex" name="Women" value="Women" onChange={(e) => {setFemale(!female);handleClick('female',!female,'gender')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Women</label><br />

                <input type="checkbox" id="rolex" name="Kids" value="Kids" onChange={(e) => {setKid(!kid);handleClick('kids',!kid,'gender')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Kids</label><br />


            <h5 className="filter_head">Sort</h5>

                <input type="checkbox" id="rolex" name="HTL" value="HTL" checked={hightolow} onChange={(e) => {setHightolow(!hightolow);setLowtohigh(hightolow);handleClick('desc',!hightolow,'price')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Price:- High To Low</label><br />

                <input type="checkbox" id="rolex" name="LTH" value="LTH" checked={lowtohigh} onChange={(e) => {setLowtohigh(!lowtohigh);setHightolow(lowtohigh);handleClick('asc',!lowtohigh,'price')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Price:- Low To High</label><br />

                <input type="checkbox" id="rolex" name="LTH" value="LTH" checked={reset} onChange={(e) => {setReset(!reset);setLowtohigh(false);setHightolow(false);handleClick('',!reset,'price')}}></input>&nbsp;
                <label className="home_leftmenu_filter">Price:- Reset</label><br />
        </div>
    )

    return(
        <>
        { (h<800) && <>
                <MDBBtn className='collapsible' color='light' onClick={e => setShowFilter(true)}>Filter</MDBBtn>
                <MDBModal show={showFilter} tabIndex='-1' setShow={setShowFilter}>
                    <MDBModalDialog  centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                        <MDBModalTitle>Filter</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShowFilter}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {filter}
                        </MDBModalBody>
                        <MDBBtn className='mx-2' color='info' onClick={toggleShowFilter}>Apply</MDBBtn>
                    </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal> 
            </>
            }

            {(h>800) && <div>
                {filter}
                </div>}
        </>
    );
};
export default Leftmenu;