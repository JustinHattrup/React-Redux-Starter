import { counterReducer } from './counter';
import { loggedReducer } from './isLogged';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
});
