import React from 'react';
import './App.css';
import TodoEventAdder from "./components/todo's_components/todoEventAdder";
import styled from 'styled-components';

function App() {

  // const TodoEventAdder = styled.div`
  // display: flex;
  // flexWrap: wrap;
  // width: 60%;
  // backgroundColor: white;
  // color: #4d4d4d;
  // padding:20px;
  // margin :auto;
  //`
  return (
    <div>
      <h1>todos</h1>
      <TodoEventAdder />
    </div>
  );
}

export default App;
