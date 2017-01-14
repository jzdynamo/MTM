import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import TodoActions from '../../../base/actions/TodoActions';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 30,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
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

    const {
      newTodoText,
    } = this.state;

    return (
      <View style={styles.root}>
        <View>
          <TextInput
            style={styles.input}
            value={newTodoText}
            onChangeText={text => this.setState({ newTodoText: text })}
            onSubmitEditing={(_) => {
              actions.addTodo(newTodoText);
              this.setState({ newTodoText: '' });
            }}
          />
        </View>
        <View>
          {
            todos.map((todo, index) => {
              let text = todo.text;
              text += todo.completed ? '[Completed]' : '[Not Completed]';
              return (
                <Text key={index}>{text}</Text>
              );
            })
          }
        </View>
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
