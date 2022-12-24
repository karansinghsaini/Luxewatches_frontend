import axios from 'axios';

export function filterwatches (data) {
    return dispatch =>{
        dispatch( {type: 'FILTERED_WATCHES', payload: data})
    }
}

export function AddWatch (data) {
    return dispatch => {
        axios.post('/luxerange/add_product', data)
        .then( res => {
            console.log(res);
            dispatch({type: 'PRODUCTADDED', payload: res});
        });
    }
}

export function GetWatches (brands,strap,gender,price) {
    return dispatch => {
        axios.get(`/luxerange/getProducts?brand_name=${brands}&strap_type=${strap}&gender=${gender}&price=${price}`)
        .then( res => {
            dispatch({type: 'GETWATCHES', payload: res.data});
        })
    }
} 

export function DeleteWatch (id){
    console.log("In actions:- " + id);
    return dispatch => {
        axios.delete(`/luxerange/deleteProducts?product_id=${id}`)
        .then( res => {
            console.log(res);
            dispatch({type: 'DELETEWATCH', payload: res.data});
        });
    }
}