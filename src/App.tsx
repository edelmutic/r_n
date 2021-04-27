import React, { useState, useEffect } from 'react';
import './App.css';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <Card
        onClick={(num) => console.log('click', num)}
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
      >
        <button>Send</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
}

export default App;
