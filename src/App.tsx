import React from 'react';
import './App.css';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const users: IUser[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        city: 'Gwenborough',
        zipcode: '92998-3874',
      },
    },
    {
      id: 2,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        city: 'Gwenborough',
        zipcode: '92998-3874',
      },
    },
  ];
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
      <UserList users={users} />
    </div>
  );
}

export default App;
