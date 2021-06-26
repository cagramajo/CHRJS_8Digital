import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import Title from './component/Title/Title';
function App() {
  return (
    <Router >
      <div className = 'App'>
        <NavBar />
        <Switch>
          <Route path='/' exact component ={ItemListContainer} />
          <Route path='/product/:IdProduct'component = {ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
/*     <Title /> */
  );
}

export default App;

// 
// 
