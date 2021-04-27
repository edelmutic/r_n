import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';

const App = () => {
  return (
    <BrowserRouter>
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
