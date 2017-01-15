import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  titleView: {
    paddingTop: 35,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1b69d',
  },
  title: {
    color: 'white',
    fontSize: 55,
    fontFamily: 'Helvetica Neue',
    fontWeight: '100',
  },
  input: {
    height: 50,
    color: '#2D2D2D',
    fontWeight: '100',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputView: {
    borderBottomWidth: 1,
    borderColor: '#a1b69d',
    backgroundColor: 'white',
  },
});

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  state = {
    newTodoText: '',
  }

  onSave = (text) => {
    const {
      addTodo,
    } = this.props;

    const {
      newTodoText,
    } = this.state;

    if (newTodoText.length !== 0) {
      addTodo(newTodoText);
      this.setState({ newTodoText: '' });
    }
  }

  render() {
    const {
      newTodoText,
    } = this.state;

    return (
      <View style={styles.root}>
        <View style={styles.titleView}>
          <Text style={styles.title}>todos</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={newTodoText}
            onSubmitEditing={_ => this.onSave()}
            onChangeText={text => this.setState({ newTodoText: text })}
            placeholder="What needs to be done?"
            placeholderTextColor="#C6C6C6"
          />
        </View>
      </View>
    );
  }
}
