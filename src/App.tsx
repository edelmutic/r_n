import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Users</NavLink>
        <br />
        <NavLink to="/todos">Todos</NavLink>
      </div>
      <div>
        <Route path={'/users'} exact>
          <UsersPage />
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage />
        </Route>
        <Route path={'/users/:id'}>
          <UserItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
