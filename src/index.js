import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

//Store는 reducer 기반으로 만들 수 있다.
const store = createStore(reducers);

console.log(store);
console.log(store.getState())
console.log(store.subscribe(function (_event) {
    console.log(_event);
}))

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
