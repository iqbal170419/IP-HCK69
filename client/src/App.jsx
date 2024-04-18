import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import Routers from './routers/Routers';

function App() {
  return (
    <ChakraProvider>

      <RouterProvider router={Routers} />
      
    </ChakraProvider>
  )
}

export default App
