import React from 'react';
import { Provider } from 'react-redux';

import Header from './Components/Header/Header';
import Table from './Components/Table/Table';
import GenerationControlContainer from './Components/GenerationControl/GenerationControlContainer.jsx'
import ObjectInfoContainer from './Components/ObjectInfo/ObjectInfoContainer.jsx';

import store from './store/index';

import Facebook from './Components/Facebook/Facebook';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header>Data Generator</Header>
        <ObjectInfoContainer />
        <Table/>
        <GenerationControlContainer />
        <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div>
      </div>
      <Facebook/>
    </Provider>
  );
}

export default App;
