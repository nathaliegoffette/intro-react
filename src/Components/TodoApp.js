import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Header from './Header';
import NewTask from './NewTask';
import ListTodo from './ListTodo';
import '../Style/TodoApp.css';

const LSKEY = "MyTodoApp";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, {id: uuidv4(), newTodo, completed: false}]);
  };

  const handleClearList = () => {
    setTodos([]);
    };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);
  
  return (
    <div className='todoapp-div'>
        <Header />
        <NewTask onAddTodo={handleAddTodo} onClearList={handleClearList} />
        <ListTodo todos={todos} onToggle={setTodos} />
    </div>
  );
};

export default TodoApp;