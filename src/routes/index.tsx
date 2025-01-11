import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BookList from '../modules/book/screens/book-list';
import BookWhislist from '../modules/book/screens/book-wishlist';
import BookDetail from '../modules/book/screens/book-detail';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="book-list" component={BookList} />
        <Stack.Screen name="book-wishlist" component={BookWhislist} />
        <Stack.Screen name="book-detail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
