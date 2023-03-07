import './App.css';
import TodoApp from './Components/TodoApp';
import * as React from 'react';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
        <TodoApp />
    </ChakraProvider>
  )
}

export default App;
