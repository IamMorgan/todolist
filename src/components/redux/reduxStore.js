import {createStore, combineReducers} from 'redux';
import contentReducer from './contentReducer';


const reducers = combineReducers({
	content: contentReducer
});

const store = createStore(reducers);

export default store;
