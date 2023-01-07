import React from 'react';

import ReactDOM from 'react-dom/client';

import App from 'app/App';
import 'styles/index.css';
import ToastProvider from 'components/Toast/ToastProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <ToastProvider>
            <App />
        </ToastProvider>
    </React.StrictMode>
);
