/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Navigation from './src/navigation/Navigation'
import store from "./src/store/store";
import { Provider } from "react-redux";

export class App extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
