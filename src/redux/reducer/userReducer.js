const myState = {
    users: [],
    isLoggedIn: false,
    current_user: {}
};

export const userReducer =  (state = myState, action) => {
    switch (action.type) {

        case 'REGISTER':
            // window.location.href = ('/login')
            return state;

        case 'USER_LOGIN':
            console.log("LoggedIn")
            return {...state,isLoggedIn: true}
            
        case 'GETALLUSERS':
            // console.log("In Reducer:- " + action.payload.data);
            return {...state, users: action.payload.data}

        case 'GOTUSERPROFILE':
            return {...state, current_user: action.payload.data}

        case 'CHANGEPASS':
            return state;

        case 'ACCOUNT_DELETED':
            return state;

        default:
            return state;
    }   
    
};

