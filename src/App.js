import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../node_modules/jquery/dist/jquery/jquery.min.js";
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Profile from './Profile';

const App = () =>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/profile" component={Profile}/>
            <Redirect to="/"/>
            {/* <Route path="/" component={Error}/>      */}
        </Switch>
        </>
    );
};
export default App;