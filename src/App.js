import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './component/NavBar/NavBar';
//import Title from './component/Title/Title';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div>
      <NavBar />
      <ItemDetailContainer />   
      <ItemListContainer />
    </div>
  );
}

export default App;

// 
// 
