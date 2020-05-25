import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';



export default class App extends Component {

    function PrivateRoute({ component: Component, authenticated, ...rest}) {
            return (<Route 
                {...rest }
                render = {(props) => authenticated === true
                    ? <Component{...props }/>
                     : < Redirect to = {{ pathname: '/login', state: {from: props.location } }} />}
                      />
                )
            }


    function PublicRoute({ component: Compoent, authenticated, ...rest }) {
                return(
                    <Route
                    {...rest}
                    render={(props) => authenticated === false
                        ? <Component{ ...props} />
                        : <Redirect to='/chat' />}
                        />
                )
            }

     
     


 
            

            private route


            public route 

            public route 

