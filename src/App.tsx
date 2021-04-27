import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink></NavLink>
      </div>
      <Route path={'/'}>
        <a href="http://localhost:3000/users">users</a>
        <br />
        <a href="http://localhost:3000/todos">todos</a>
      </Route>
      <div>
        <Route path={'/users'} exact>
          <UsersPage />
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
