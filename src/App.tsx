import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './screens/Home/Home';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
