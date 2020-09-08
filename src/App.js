import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './img/logo.png'
import Layout from './components/layout'
import Home from './pages/home'
import Nosotros from './pages/nosotros'
import Login from './pages/login'
import SuccessLogin from './pages/successLogin'
import SignUp from './pages/signUpPage'
import Problem from './pages/problemPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Layout>
        <Switch>
          <Route exact path="/"><Home /></Route>
          {/* <Route exact path="/nosotros"><Nosotros /></Route> */}
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/signup"><SignUp /></Route>
          <Route exact path="/successLogin"><SuccessLogin /></Route>
          <Route exact path="/problem"><Problem /></Route>
        </Switch>
    </Layout>
  );
}

export default App;
