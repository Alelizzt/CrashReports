import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};
export default class Login extends Component<Props> {
	render(){
		return(
			<View style={styles.container}>
			<Image
				style={{width: 70, height: 70}}
				source={require('../images/logo.png')}/>
				<Text style={styles.logoText}> Crash Report App </Text>
			</View>
			)
	}
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
  	marginVertical: 15,
  	fontSize: 18,
  	color: 'rgba(255, 255, 255, 0.7)',
  },
});
