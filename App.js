import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
// import * as Font from 'expo-font';
import createRouter from './src/Routes';

export default function App() {
  const Routes = createRouter();
  // useEffect(() => {
  //   Font.loadAsync({
  //     // eslint-disable-next-line prettier/prettier
  //     'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
  //   });
  // }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3bb0b7" />
      <Routes />
    </>
  );
}
