'use strict';

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import configureStore from './js/infra/configureStore';
import HomePage from './js/components/homePage';

const RouterWithRedux = connect()(Router);
const store = configureStore();

export default class App extends Component{    
    render(){
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key='homePage' component={HomePage} title='Home Page'/>
                    </Scene>
                </RouterWithRedux>            
            </Provider>
        )
    }
}