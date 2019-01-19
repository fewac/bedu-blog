import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';


ReactDOM.render(
    <Provider>
         <App />, document.getElementById('root'));
    </Provider>

