import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Main from './main';

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


ReactDOM.render(<Main />,document.getElementById('root')); 