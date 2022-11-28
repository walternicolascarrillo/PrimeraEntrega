import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Algo from "./principal";
import "./estilos.scss";


const elemento_del_dom =document.getElementById('root');

const root = ReactDOM.createRoot(elemento_del_dom);
root.render(<Algo/>);
reportWebVitals();
