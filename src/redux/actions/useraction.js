import axios from "axios";

export function GetUserProfile (id) {
    return dispatch => {
        axios.get(`/luxerange/user/${id}`)
        .then( (res) => {
            dispatch({type: 'GOTUSERPROFILE', payload: res.data});
        });
    };
}

export function ChangePassword (data) {
    return dispatch => {
        axios.put(`/luxerange/user/forgot_password`, data)
        .then ( res => {
            dispatch({type: 'CHANGEPASS', payload: res});
            alert("Password has been changed successfully");
        })
    }
}

// to register a new user
export function RegisterUser (data) {
    return dispatch => {
        axios.post('/luxerange/signup', data)
        .then( res => {
            console.log("In action");
            dispatch({type: 'REGISTER', payload: res.data});
        })
    }
};

// to login existing user
export function Loginuser (data) {
    return dispatch => {
        console.log("Logged In");
        axios.post('/luxerange/login', data)
        .then( res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('isloggedin', true);
            dispatch({type: 'USER_LOGIN', payload: res});
            window.location.href = '/home'; 
        })
    }
};
//  to get the data of all the users as per type:- admin/user/vendor
export function GetUsers (type) {
    return async dispatch => {
        console.log("In action :- " + type)
        await axios.get(`/luxerange/networkUsers?type=${type}`)
        .then(res => {
            dispatch({type: 'GETALLUSERS', payload: (res.data)});
        })
        .catch(function (error) {
            if (error === "Invalid Token")
            window.location.href = '/login';
          });
    }
};
// to change the role of the user.
export function ChangeRole (id,type,data) {
    return async dispatch => {
        await axios.put(`/luxerange/setAdmin?user_id=${id}&${type}=${data}`)
        .then(res => {
            dispatch({type: 'ROLECHANGED', payload: res});
        });
    }
}

export function Deleteaccount (id) {
    return dispatch => {
        console.log("id:- " + id)
        axios.delete(`/luxerange/user/${id}`)
        .then( res => {
            dispatch({type: 'ACCOUNT_DELETED', payload: res.data})
            localStorage.clear('jwtToken');
            localStorage.clear('isloggedin');
            alert("Account deleted successfully.")
            window.location.href = '/register';
        });
    }
};
