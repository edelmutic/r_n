import React from 'react';
import './App.css';
import Card, { CardVariant } from './components/Card';

function App() {
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
    </div>
  );
}

export default App;
