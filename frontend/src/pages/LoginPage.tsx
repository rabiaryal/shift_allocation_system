import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../shared/AuthLayout';
import InputField from '../shared/InputField';
import Button from '../shared/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
    navigate('/shift-form'); // Redirect to ShiftForm on successful login
  };

  return (
    <AuthLayout>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shift Allocation System</h1>
        <p className="text-gray-500">Please log in to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          Icon={Mail}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          Icon={Lock}
        />

        <Button type="submit" fullWidth>
          Log In
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-gray-500">Don't have an account?</span>{' '}
        <Button variant="secondary" onClick={() => navigate('/signup')}>
          Sign up
        </Button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;



