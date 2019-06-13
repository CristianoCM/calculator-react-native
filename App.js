import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default class App extends Component {
  state = {
    displayValue: '0'
  };

  addDigit = n => {
    this.setState({ displayValue: n });
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}></Button>
          <Button label='/' operation></Button>
          <Button label='7'></Button>
          <Button label='8'></Button>
          <Button label='9'></Button>
          <Button label='*' operation></Button>
          <Button label='4'></Button>
          <Button label='5'></Button>
          <Button label='6'></Button>
          <Button label='-' operation></Button>
          <Button label='1'></Button>
          <Button label='2'></Button>
          <Button label='3'></Button>
          <Button label='+' operation></Button>
          <Button label='0' double></Button>
          <Button label='.'></Button>
          <Button label='='></Button>
        </View>
      </View>
    );
  }
}

