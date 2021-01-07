import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

for ( let i =1 ; i<20;i++) {
    const newDiv = document.createElement('div');
    const id = Math.floor(Math.random() * 100000);
    newDiv.id = `${id}`;
    document.body.appendChild(newDiv)
    ReactDOM.render(<App />, document.getElementById(`${id}`));

}
serviceWorker.unregister();
