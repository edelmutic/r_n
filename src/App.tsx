import React, { useState, useEffect } from 'react';
import './App.css';
import Card, { CardVariant } from './components/Card';
import { IUser } from './types/types';
import { ITodo } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Route } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path={'/users'} exact>
          <UserPage />
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
