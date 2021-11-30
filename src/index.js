// import React from 'react';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Route, Routes
// } from 'react-router-dom';
// ReactDOM.render(
//   <Router>
//     <Routes>
//     <Route path='/' component={App} />
// </Routes>
//   </Router>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./App";
import AppShowCase from './Componets/AppShowCase';
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<App />} />
     <Route path="/home" element={<App />} />
      <Route path="/apps" element={<AppShowCase />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);