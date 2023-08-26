import React from 'react';
import App from './components/App';
import { createRoot } from'react-dom/client';
import './dist/style.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
    <App/>
);

