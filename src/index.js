import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScoreProvider } from './contexts/ScoreContext';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="learn-build-type-jqq.eu.auth0.com"
      clientId="4nm0masKXMgY8DqV7tyBK0AS50N0IykT"
      redirectUri={window.location.origin}
      audience="https://learnbuildtypeapi/"
    >
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();



