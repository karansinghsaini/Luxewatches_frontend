import axios from 'axios';
const URL = process.env.REACT_APP_SERVER_URL;
export function filterwatches (data) {
    return dispatch =>{
        dispatch( {type: 'FILTERED_WATCHES', payload: data})
    }
}

export function AddWatch (data) {
    return dispatch => {
        axios.post(`${URL}/luxerange/add_product`, data)
        .then( res => {
            console.log(res);
            dispatch({type: 'PRODUCTADDED', payload: res});
        });
    }
}

export function GetWatches (brands,strap,gender,price) {
    return dispatch => {
        axios.get(`${URL}/luxerange/getProducts?brand_name=${brands}&strap_type=${strap}&gender=${gender}&price=${price}`)
        .then( res => {
            dispatch({type: 'GETWATCHES', payload: res.data});
        })
    }
} 

export function DeleteWatch (id){
    console.log("In actions:- " + id);
    return dispatch => {
        axios.delete(`${URL}/luxerange/deleteProducts?product_id=${id}`)
        .then( res => {
            console.log(res);
            dispatch({type: 'DELETEWATCH', payload: res.data});
        });
    }
}