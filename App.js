import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      width: null,
      height: null
    };
  }

  render() {
    return (
      <View
        style={styles.container}
        onLayout={l => this.setState({ width: l.nativeEvent.layout.width, height: l.nativeEvent.layout.height })}
      >
        <Text style={styles.text}>Height: {this.state.height}</Text>
        <Text style={styles.text}>Width: {this.state.width}</Text>
        <View style={styles.textInputContainer}>
          <TextInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    paddingTop: 30
  },
  text: {
    fontSize: 20
  },
  textInputContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 1,
    marginTop: 500
  }
});
