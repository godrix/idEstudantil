import React from 'react';
import { StatusBar } from 'react-native';
import createRouter from './src/routes';

export default function App() {
  const Routes = createRouter();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7dc189" />
      <Routes />
    </>
  );
}
