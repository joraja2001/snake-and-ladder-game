import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from './gettinginput';
import Getting from './gettingnameinput';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import SnakeAndLadderGame from './SnakeAndLadderGame';
// import SnakeAndLadderGame from '.GameComponents/SnakeAndLadderGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SnakeAndLadderGame/> */}
    {/* <SnakeAndLadderGame/> */}
    <Input/>
    {/* <Getting/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
