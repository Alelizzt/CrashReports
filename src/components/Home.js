import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
/*import MapView from 'react-native-maps';*/

type Props = {};
export default class Home extends Component<Props> {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.labelText}> Report </Text>
				<Text style={styles.labelText}> License plate </Text>
		        <TextInput style={styles.inputBox}
		          underlineColorAndroid='rgba(0,0,0,0)'
		          placeholder='ABC123'
              placeholderTextColor= '#ffffff'
              />
		        <Text style={styles.labelText}> Location </Text>
		        {/*<MapView style={styles.map}>
		        	region={{
		        		latitude: 4.624335,
		        		longitude: -74.063644,
		        		latitudeDelta: 0.015,
		        		longitudeDelta: 0.0121,
		        	}}
		          </MapView> */}
		        <Text style={styles.labelText}> Photo </Text>
		        <Text style={styles.labelText}> Description </Text>
            <TextInput style={styles.descriptionInputBox}
              multiline={true}
              numberOfLines={4}
              />
		        <TouchableOpacity style={styles.button}>
		          <Text style={styles.buttonText}>Send</Text>
		        </TouchableOpacity>  
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputBox: {
    width: 170,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 36,
    color: '#ffffff',
    marginVertical: 10,
  },

  map:{
  	position: 'absolute',
  	top: 0,
  	left: 0,
  	right: 0,
  	bottom: 0,
  },

  descriptionInputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },

  labelText: {
  	color: 'rgba(255, 255, 255, 0.6)',
  	fontSize: 18,
  },

  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical: 12,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
});