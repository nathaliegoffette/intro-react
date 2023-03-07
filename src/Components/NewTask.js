import React, { useRef } from 'react';
import { Input , Button } from '@chakra-ui/react' 
import '../Style/NewTask.css';

const NewTask = ({ onAddTodo, onClearList }) => {
  const inputRef = useRef();

  const clickHandler = () => {
    const inputElement = inputRef.current;

    onAddTodo(inputElement.value);
    inputElement.value = '';
  };

  const clearListHandler = () => {
    onClearList();
    };

  return (
    <div className='div-new'>
      <label className='label-new'>Things to do: </label>
      <Input className='input-new' bg='white' width='25rem' ref={inputRef} placeholder='New task' type="text"  />
      <div  className='div-btn'>
        <Button colorScheme='blue' className='btn-new' onClick={clickHandler}>Add</Button>
        <Button colorScheme='orange' className='btn-clear' onClick={clearListHandler}>Clear list</Button>
      </div>
    </div>
  );
};

export default NewTask;
