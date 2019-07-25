import React from 'react';
import { Provider } from 'react-redux';

import Header from './Components/Header/Header';
import Table from './Components/Table/Table';
import GenerationControlContainer from './Components/GenerationControl/GenerationControlContainer.jsx'
import ObjectInfoContainer from './Components/ObjectInfo/ObjectInfoContainer.jsx';

import store from './store/index';



function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header>Data Generator</Header>
        <ObjectInfoContainer />
        <Table/>
        <GenerationControlContainer />
      </div>
    </Provider>
  );
}

export default App;
