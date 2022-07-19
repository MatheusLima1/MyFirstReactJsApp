import React, { Component } from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' button_title = 'Delete'/>
    </div>
  );
}

export default App;
