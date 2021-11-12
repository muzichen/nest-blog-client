import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './stores';
import { BrowserRouter } from 'react-router-dom';
import manager from './websockets/manager';

const AppBoot = async () => {
 try {
   const isRunning = await manager.setUp();
   manager.emit('events');
   if (isRunning) {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
   }
 } catch(err) {
   console.error(err);
 }
}

AppBoot();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
