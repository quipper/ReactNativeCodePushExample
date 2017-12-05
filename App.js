import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Linking, Image } from 'react-native';
import codePush from 'react-native-code-push';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 20,
  }
});

const onPress = () => {
  Linking.openURL('https://www.quipper.com/career/');
};

const App = () => (
  <View style={styles.container}>
    <TouchableHighlight onPress={() => onPress()}>
      <View style={styles.inner}>
        <Image source={require('./logo.png')} />
        <Text style={styles.text}>Quipper is hiring React Native developers!</Text>
      </View>
    </TouchableHighlight>
  </View>
);

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {},
})(App);
