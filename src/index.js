import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd/dist/antd.css';
// import Admin from './admin.jsx'
import Router from './router.jsx'
import  { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './pages/redux/store/index'
const store =configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
