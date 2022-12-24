import React, { useEffect } from "react";
import WatchCard from "./watches";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { GetWatches } from "../../redux/actions/watchesaction";
import { useDispatch, useSelector } from "react-redux";

const Rightmenu = (props) => {
  const dispatch = useDispatch();
  // console.log(props.strap)
  let brand = props.brands.toString();
  let strap = props.strap.toString();
  let gender = props.gender.toString();
  let price = props.price.toString();
  const watches = useSelector((state) => state.watchesReducer.watches);

  useEffect(() => {
    // console.log("Brand in Right:- " + strap);
    dispatch(GetWatches(brand, strap, gender,price));
  }, [props.brands, props.strap, props.gender,props.price]);
  // var count = 0;
  var h = window.innerWidth;
  let result = [];
  const watches_data = watches.map((watch, index) => {
    result.push(
      <MDBCol md="4" key={watch._id}>
        <WatchCard watch={watch} />
      </MDBCol>
    );
    if ((index + 1) % 3 === 0 && h>600) {
      let temp = result;
      result = [];
      return (
        <>
          <MDBRow>{temp}</MDBRow>
          <br></br>
        </>
      );
    }
    if(h<600){
      let temp = result;
    result = [];
      return (
          <>
            <MDBRow>{temp}</MDBRow>
            <br></br>
          </>
        );
      }
  });

  return (
    <MDBContainer>
      {watches_data}
      <MDBRow>{result}</MDBRow><br />
    </MDBContainer>);
};

export default Rightmenu;
