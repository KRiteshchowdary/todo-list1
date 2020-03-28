import React from 'react';
import './App.css';
import Todo from "./components/todo's_components/todo"
import TodoEventAdder from "./components/todo's_components/todoEventAdder";
import TodoEvents from "./components/todo's_components/todoEvents";

function App() {
  return (
    <div>
      <header className="App-header">
        TODO LIST
      </header>
      <Todo />
      <TodoEventAdder />
      {/* <TodoEvents /> */}
    </div>
  );
}

export default App;
