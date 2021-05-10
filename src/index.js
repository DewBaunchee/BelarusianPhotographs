import React from 'react';
import {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'

import App from "./App";
import './internationalization';

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <App/>
    </Suspense>
    , document.getElementById('root')
);
