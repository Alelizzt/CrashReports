import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

type Props = {};
export default class Signup extends Component<Props> {
	render(){
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup"/>
				<View styles={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an acoount?</Text>
					<Text style={styles.signupButton}>Signin</Text>
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