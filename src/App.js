import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './component/NavBar/NavBar';
//import Title from './component/Title/Title';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />     
    </div>
  );
}

export default App;
