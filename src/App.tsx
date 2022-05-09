import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Home from './screens/Home';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
