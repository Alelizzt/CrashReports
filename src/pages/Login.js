import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import { Actions } from 'react-native-router-flux';

type Props = {};
export default class Login extends Component<Props> {

  signup() {
		Actions.signup()
  }
	render(){
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login"/>
				<View styles={styles.signupTextCont}>
					<Text style={styles.signupText}> Don't have an account yet? </Text>
					<TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
  },

  signupTextCont: {
  	flexGrow: 1,
  	alignItems: 'flex-end',
  	justifyContent: 'center',
  	paddingVertical: 16,
  	flexDirection: 'row',
  },

  signupText: {
  	color: 'rgba(255, 255, 255, 0.6)',
  	fontSize: 16,
  },

  signupButton: {
  	color: '#ffffff',
  	fontSize: 16,
  	fontWeight: '500',
  },
});
