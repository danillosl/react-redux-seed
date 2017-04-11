import React from 'react';
import ReactDOM from 'react-dom';
import UserContainer from './src/components/UserContainer.js';

import { Provider } from 'react-redux'
import store from './src/store'

ReactDOM.render(
    <Provider store = {store}>
        <UserContainer />
    </Provider>,
    document.getElementById('root'));