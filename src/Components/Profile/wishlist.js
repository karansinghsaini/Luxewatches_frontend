import {React, useState,useEffect} from 'react';
import WatchCard from "../Home/watches";
import {  MDBRow, MDBCol } from "mdbreact";
import { GetWatches } from "../../redux/actions/watchesaction";
import { useDispatch, useSelector } from "react-redux";
import '../../css/profile/wishlist.css';
export const Wishlist = () =>{
    var h = window.innerWidth;
    let result = [];
    const dispatch = useDispatch();
    const watches = useSelector((state) => state.watchesReducer.watches);

    useEffect(() => {
        // console.log("Brand in Right:- " + strap);
        dispatch(GetWatches());
      }, []);

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
      <div className='wishlist_container'>
        <h3>Wishlist</h3>
        <p>Find your saved items and get ready to order them again.</p>
        {watches_data}
      </div>  
    );
};