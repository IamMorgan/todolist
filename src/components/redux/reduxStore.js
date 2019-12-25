import {createStore, combineReducers} from 'redux';
import contentReducer from './contentReducer';


let reducers = combineReducers({
	content:contentReducer
});

let store = createStore(reducers);

export default store;
