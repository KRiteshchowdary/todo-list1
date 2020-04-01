import React from 'react';
import './App.css';
import Todo from "./components/todo's_components/todo"
import TodoEventAdder from "./components/todo's_components/todoEventAdder";

function App() {
  return (
    <div>
      <header className="App-header">
        TODO LIST
      </header>
      <Todo />
      <TodoEventAdder />
    </div>
  );
}

export default App;
