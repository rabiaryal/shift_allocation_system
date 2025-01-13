import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import AuthLayout from './shared/AuthLayout';
import InputField from './shared/InputField';
import Button from './shared/Button';

const LoginPage = ({ onSwitchToSignup }: { onSwitchToSignup: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <AuthLayout>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shift Allocation System</h1>
        <p className="text-gray-500">Please sign in to continue</p>
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <Button variant="link">Forgot password?</Button>
        </div>

        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-gray-500">Don't have an account?</span>{' '}
        <Button variant="link" onClick={onSwitchToSignup}>
          Sign up
        </Button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;