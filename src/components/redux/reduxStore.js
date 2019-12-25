import {createStore, combineReducers} from 'redux';
import contentReducer from './contentReducer';


let reducers = combineReducers({
	content:contentReducer
});

const store = createStore(reducers);

export default store;
