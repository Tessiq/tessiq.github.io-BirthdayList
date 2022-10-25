import './App.css';
import { useState } from 'react';
import data from './data';
import List from './list';
export default function App() {
  const [people, setPerson] = useState(data);
  return (
    <div className="App">
      <div className='Text'>
        <h3>{people.length} people have Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPerson([])}>Clear All</button>
      </div>

    </div>
  );
}
