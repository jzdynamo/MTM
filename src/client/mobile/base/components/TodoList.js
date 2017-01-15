import React, { PropTypes, Component } from 'react';
import autobind from 'autobind-decorator';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  root: {
  },
});

export default class Header extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  }

  render() {
    const {
      todos,
    } = this.props;

    return (
      <ScrollView style={styles.root}>
        {
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onToggleCompletion={this.onItemToggleCompletion}
            />
          ))
        }
      </ScrollView>
    );
  }

  @autobind
  onItemToggleCompletion(todoId) {
    const {
      actions,
    } = this.props;

    actions.completeTodo(todoId);
  }
}
