import React from 'react'
import './styles/global-style.css'
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App