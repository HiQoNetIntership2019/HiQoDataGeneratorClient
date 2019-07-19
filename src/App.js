import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

import Header from './Components/Header/Header';
import Table from './Components/Table/Table';


const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header>Data Generator</Header>
        <Table/>
      </div>
    </Provider>
  );
}

export default App;
