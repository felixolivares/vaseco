import React from 'react';
import './App.css';

import { Amplify } from 'aws-amplify';
import {
  Authenticator, useAuthenticator
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { Sidebar, ProtectedRouter } from './components';

Amplify.configure(awsExports);

const Login = () => {
  return (
    <div className='authenticator__container'>
      <Authenticator hideSignUp={true} />
    </div>
  );
}

const Home = () => {
  const { signOut } = useAuthenticator((context) => [context.user]);
  return (
    <main>
      <div className='app__container'>
        
        <ProtectedRouter signOut={ signOut}/>
      </div>
    </main>
  );
}

export default function App() {
  const { route } = useAuthenticator((context) => [context.route]);
  return route === 'authenticated' ? <Home /> : <Login />;
}