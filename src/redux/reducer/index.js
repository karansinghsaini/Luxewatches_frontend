import { combineReducers} from 'redux';
import { userReducer } from './userReducer';
import { watchesReducer } from './watchesReducer';

const rootReducer = combineReducers({
    userReducer,
    watchesReducer
});

export default rootReducer;