import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Routes from './routes';
import Navbar from './components/Navbar';

const App = () => {
  const [testData, setTestData] = useState('');
  let data = axios.get('/api/test').then((data) => {
    setTestData(data.data.message);
  });
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
