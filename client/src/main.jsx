import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


import { Provider } from 'react-redux';
import { store } from './app/store';
import { postApi } from './features/post/postApi.js';

store.dispatch(postApi.endpoints.fetchAllPosts.initiate());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
