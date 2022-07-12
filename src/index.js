import React from 'react';
import { createRoot } from 'react-dom/client';
import Accueil from './pages/Accueil';
import './Sass/main.scss'
import { Provider } from 'react-redux'
import store from './redux/store'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
       <Accueil />
    </Provider>
  </React.StrictMode>
);

