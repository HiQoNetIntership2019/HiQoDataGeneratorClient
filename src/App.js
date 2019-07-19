import React from 'react';
import Header from './Components/Header/Header';
import Table from './Components/Table/Table';

function App() {
  return (
    <div>
      <div className="container">    
        <Header>Data Generator</Header>  
        <Table/>   
      </div>
    </div>
  );
}

export default App;
