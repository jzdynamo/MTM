import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import autobind from 'autobind-decorator';
import css from '../styles/TodoItem.css';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  }

  state = {
    editing: false,
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  @autobind
  onToggleClick(todoId, evt) {
    const {
      completeTodo,
    } = this.props;

    completeTodo(todoId);
  }

  render() {
    const { todo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={text => this.handleSave(todo.id, text)} />
      );
    } else {
      element = (
        <div className={css.view}>
          <div
            className={cx({
              [css.toggle]: true,
              [css.checked]: todo.completed,
            })}
            onClick={this.onToggleClick.bind(null, todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className={css.destroy}
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }

    return (
      <li className={cx({
        [css.root]: true,
        [css.completed]: todo.completed,
        [css.editing]: this.state.editing,
      })}>
        {element}
      </li>
    );
  }
}
