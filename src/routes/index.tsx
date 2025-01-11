import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookList from '../modules/book/screens/book-list';
import BookWhislist from '../modules/book/screens/book-whishlist';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="book-list" component={BookList} />
        <Stack.Screen name="book-whislist" component={BookWhislist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
