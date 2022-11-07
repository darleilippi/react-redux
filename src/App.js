import React from 'react';

import { Provider } from 'react-redux';

// import { Container } from './styles';

import './styles/global.css';

import Video from './components/Video'
import Sidebar from './components/Sidebar';

import store from './store';

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
