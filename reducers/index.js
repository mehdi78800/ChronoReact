import { combineReducers } from 'redux';

import reducerChrono from './chrono.js';

export default combineReducers({
    chrono : reducerChrono,
});