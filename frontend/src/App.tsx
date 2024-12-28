
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ShiftForm from './pages/shiftform';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLogin ? (
              <LoginPage onSwitchToSignup={() => setIsLogin(false)} />
            ) : (
              <SignupPage onSwitchToLogin={() => setIsLogin(true)} />
            )
          }
        />
        <Route path="/shift-form" element={<ShiftForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
