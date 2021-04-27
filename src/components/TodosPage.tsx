import React, { useState, useEffect, FC } from 'react';
import { ITodo } from '../types/types';
import axios from 'axios';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      );
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default TodosPage;
