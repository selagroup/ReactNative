'use strict';

import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import configureStore from './js/infra/configureStore';
import HomePage from './js/components/homePage';
import SessionPage from './js/components/sessionPage';
import SpeakerPage from './js/components/speakerPage';

const Scenes = Actions.create(
                    <Scene key="root">
                        <Scene key='homePage' component={HomePage} title='Home Page' initial={true}/>
                        <Scene key='sessionPage' component={SessionPage} title='Session Page' />
                        <Scene key='speakerPage' component={SpeakerPage} title='Speaker Page' />                        
                    </Scene>
  )

const RouterWithRedux = connect()(Router);
const store = configureStore();

export default class App extends Component{    
    render(){
        return (
            <Provider store={store}>
                <RouterWithRedux scenes={Scenes}/>
            </Provider>
        )
    }
}