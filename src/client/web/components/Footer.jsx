import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import css from '../styles/Footer.css';
import TodoFilters from '../../base/constants/TodoFilters';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = TodoFilters;

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
};

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired,
  }

  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className={css.todoCount}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a className={cx({ [css.selected]: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className={css.clearCompleted}
                onClick={onClearCompleted} >
          Clear completed
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <footer className={css.footer}>
        {this.renderTodoCount()}
        <ul className={css.filters}>
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>,
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}
