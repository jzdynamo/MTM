import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#a1b69d',
  },
  checkbox: {
    flex: 0,
    height: 30,
    width: 30,
    marginRight: 10,
  },
  todoItemView: {
    flex: 1,
  },
  todoItem: {
    color: '#7D7D7D',
    fontSize: 17,
    fontWeight: '200',
  },
});

// eslint-disable-next-line
const checkedIcon = require('../images/checked.png');
// eslint-disable-next-line
const uncheckedIcon = require('../images/unchecked.png');

export default class Header extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    onToggleCompletion: PropTypes.func.isRequired,
  }

  render() {
    const {
      todo,
      onToggleCompletion,
    } = this.props;

    const {
      text,
      completed,
    } = todo;

    return (
      <View style={styles.root}>
        <TouchableOpacity
          underlayColor="transparent"
          onPress={() => onToggleCompletion(todo.id)}
        >
          <View style={styles.checkbox}>
            <Image style={styles.checkbox} source={completed ? checkedIcon : uncheckedIcon} />
          </View>
        </TouchableOpacity>
        <View style={styles.todoItemView}>
          <Text style={styles.todoItem}>{text}</Text>
        </View>
      </View>
    );
  }
}
