import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import TodoActions from '../../../base/actions/TodoActions';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#f2f2f2',
  },
});

class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  }

  state = {
    newTodoText: '',
  }

  render() {
    const {
      todos,
      actions,
    } = this.props;

    return (
      <View style={styles.root}>
        <Header addTodo={actions.addTodo} />
        <TodoList todos={todos} actions={actions} />
      </View>
    );
  }

  on
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
