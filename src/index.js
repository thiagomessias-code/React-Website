import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style/flexboxgrid.min.css";
import './style/index.css';
import './style/about.css'
import'./style/Team.css'
import './style/video.css'
import './style/footer.css'
import './style/sustainability.css'

import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
