import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './Components/TodoList/TodoList';
import './App.scss';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
