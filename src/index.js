import React from 'react';
import ReactDOM from 'react-dom';

import DetailsProvider from './context/DetailsProvider';
import MainProvider from './context/MainProvider';
import RecipesProvider from './context/RecipesProvider';
import reportWebVitals from './reportWebVitals';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <RecipesProvider>
        <DetailsProvider>
          <App />
        </DetailsProvider>
      </RecipesProvider>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
