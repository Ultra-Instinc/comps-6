import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './app';
import { NavigationProvider } from "./conponents/context/navigation";


const el=document.getElementById('root')
const root=ReactDOM.createRoot(el)

document.body.style.background='#555'

root.render(
    <NavigationProvider>
        <App/>
    </NavigationProvider>
)