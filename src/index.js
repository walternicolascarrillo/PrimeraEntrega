import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Algo from "./principal";
import "./estilos.scss";

/* function Algo(){
  return "hola bebe";
} */
const elemento_del_dom =document.getElementById('root');

const root = ReactDOM.createRoot(elemento_del_dom);
root.render(<Algo/>);
/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
