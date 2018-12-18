import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd/dist/antd.css';
// import Admin from './admin.jsx'
import Router from './router.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
