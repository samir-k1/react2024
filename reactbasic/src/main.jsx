import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const reactElement = React.createElement(
  //  <h1>fghjklkjhgfdfghjkl</h1>,
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google',
  
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {reactElement}   
  </React.StrictMode>
);