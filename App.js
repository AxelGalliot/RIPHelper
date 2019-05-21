import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraPage from './src/camera.page';

export default class App extends React.Component {
  render() {
    return (
      //<View style={styles.container}>
        //<Text>Salut Ludo!</Text>
      //</View>
      <CameraPage/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
