import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './lib/styles/GlobalStyle';

render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);
