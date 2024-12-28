import React, { useState } from 'react';
import { Lock, Mail, User } from 'lucide-react';
import AuthLayout from '../shared/AuthLayout';
import InputField from '../shared/InputField';
import Button from '../shared/Button';

const SignupPage = ({ onSwitchToLogin }: { onSwitchToLogin: () => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { name, email, password, confirmPassword });
  };

  return (
    <AuthLayout>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
        <p className="text-gray-500">Sign up to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          id="name"
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          Icon={User}
        />

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
          placeholder="Create a password"
          Icon={Lock}
        />

        <InputField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          Icon={Lock}
        />

        <Button type="submit" fullWidth>
          Sign up
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-gray-500">Already have an account?</span>{' '}
        <Button variant="link" onClick={onSwitchToLogin}>
          Sign in
        </Button>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;