import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import autobind from 'autobind-decorator';
import css from '../styles/MainSection.css';
import TodoItem from './TodoItem';
import Footer from './Footer';
import TodoFilters from '../../base/constants/TodoFilters';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = TodoFilters;

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed,
};

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  }

  state = { filter: SHOW_ALL }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted();
  }

  handleShow = (filter) => {
    this.setState({ filter });
  }

  renderToggleAll(completedCount) {
    const { todos } = this.props;
    if (todos.length > 0) {
      return (
        <div
          className={cx({
            [css.toggleAll]: true,
            [css.checked]: completedCount === todos.length,
          })}
          onClick={this.onToggleAllClick}
        />
      );
    }
    return null;
  }

  renderFooter(completedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={this.handleShow.bind(this)} />
      );
    }
    return null;
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0,
    );

    return (
      <section className={css.main}>
        {this.renderToggleAll(completedCount)}
        <ul className={css.todoList}>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />,
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }

  @autobind
  onToggleAllClick(evt) {
    const { actions } = this.props;
    actions.completeAll();
  }
}
