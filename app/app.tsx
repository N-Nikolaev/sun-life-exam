import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


const MOUNT_NODE: HTMLElement | null = document.getElementById('app');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    MOUNT_NODE
);
