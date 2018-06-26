import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Report from './pages/Report';
import Signup from './pages/Signup';

export default class Routes extends Component<Props> {
	render() {
		return(
			<Router>
			    <Stack key="root">
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Signup"/>
            <Scene key="report" component={Report} title="Report" />
			    </Stack>
			 </Router>
			)
	}
}
