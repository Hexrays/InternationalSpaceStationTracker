import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import issReducer from './issReducer';

const rootReducer = combineReducers({issReducer, routing: routerReducer});

export default rootReducer;