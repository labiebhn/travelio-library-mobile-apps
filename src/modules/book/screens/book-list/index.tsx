import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBookList} from './functions';

const BookList = (props: any) => {
  const {} = useBookList(props);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>BookList</Text>
      </View>
    </SafeAreaView>
  );
};

export default BookList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
