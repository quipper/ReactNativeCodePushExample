import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import codePush from 'react-native-code-push';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>Quipper is hiring React Native developers!</Text>
  </View>
);

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {},
})(App);
