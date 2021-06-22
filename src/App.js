import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './component/NavBar/NavBar';
import Title from './component/Title/Title';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Title />
        <Switch>
          <Route path='/' exact component ={ItemListContainer} />
          <Route path='/product/:IdProduct'component = {ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// 
// 
