import * as types from '../constants/TodoActionTypes';

export default ({
  addTodo: text => ({ type: types.ADD_TODO, text }),
  deleteTodo: id => ({ type: types.DELETE_TODO, id }),
  editTodo: (id, text) => ({ type: types.EDIT_TODO, id, text }),
  completeTodo: id => ({ type: types.COMPLETE_TODO, id }),
  completeAll: () => ({ type: types.COMPLETE_ALL }),
  clearCompleted: () => ({ type: types.CLEAR_COMPLETED }),
});
