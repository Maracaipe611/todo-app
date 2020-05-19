import React from 'react';
import './App.css';
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <section>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
