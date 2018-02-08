import { combineReducers } from 'redux';
import _change from './info';

const reducers = combineReducers({
    _change //reducer를 여러가지를 만들 경우 하나로 합칠 수 있다.
    //, company 
});

export default reducers;