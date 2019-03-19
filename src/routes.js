import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import LoginComponent from './components/LoginScreen';
import AddCardComponent from './components/AddCardScreen';
const Routes = () => (
    <Router>
        <Scene hideNavBar={true} key="root">
            <Scene key="login" component={LoginComponent} initial={true} />
            <Scene key="card" component={AddCardComponent} />
        </Scene>
    </Router>
)

export default Routes;