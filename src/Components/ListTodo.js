import React from 'react';
import { Checkbox } from '@chakra-ui/react';
import '../Style/ListTodo.css';

const ListTodo = ({ todos, onToggle }) => {

  const handleToggle = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    onToggle(newTodos);
  };
  

  return (
    <ul className='div-list'>
      {todos.map((todo) => (
        <li key={todo.id}>
            <Checkbox size='md' className="li-checkbox" colorScheme='orange' type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
            {todo.newTodo}
        </li>
        ))}
    </ul>
  );
};

export default ListTodo;