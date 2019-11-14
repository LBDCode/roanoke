import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { setDefaultOptions } from 'esri-loader';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setGlobal } from 'reactn';


// set defaults for global state items
setGlobal({
  currentGageID: null, 
  currentGageName: null,
});

setDefaultOptions({ css: true });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
