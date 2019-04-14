import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provide} from './context.js'
import ScrollToTop from './ScrollToTop'

import './styles/style.css'

ReactDOM.render(<Provide><BrowserRouter><ScrollToTop><App /></ScrollToTop></BrowserRouter></Provide>, document.getElementById('root'));
