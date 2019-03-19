import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddCardReducer from './AddCardReducer'

export default combineReducers({
    auth: AuthReducer,
    add: AddCardReducer
})