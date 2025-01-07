
import React, { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/approutes';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};




export default App;
