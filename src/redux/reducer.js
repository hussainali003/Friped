import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../auth/redux/authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
