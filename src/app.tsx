import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
