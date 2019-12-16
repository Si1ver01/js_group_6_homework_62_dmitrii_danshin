import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Layout from './hoc/Layout';
import Form from './containers/Form/Form';
import Jumbotron from './containers/Jumbotron/Jumbotron';
import MainPage from './containers/MainPage/MainPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/form' component={Form}/>
            <Route path='/djumbo' component={Jumbotron}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
