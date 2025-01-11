import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBookList} from './functions';
import {LoadWrapper} from '../../../../components/layouts';
import {CardBook} from '../../../../components/cards';
import colors from '../../../../utils/colors';

const BookList = (props: any) => {
  const {
    loading,
    data,
    paginate,
    refreshing,
    action: {getData, onRefresh},
  } = useBookList(props);

  const renderItem = ({item}: any) => {
    return <CardBook data={item} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LoadWrapper
        loading={loading}
        refreshing={refreshing}
        paginate={paginate}>
        <FlatList
          style={styles.container}
          data={data}
          keyExtractor={(_, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          onEndReachedThreshold={2}
          onEndReached={() => getData('next')}
          renderItem={renderItem}
        />
      </LoadWrapper>
    </SafeAreaView>
  );
};

export default BookList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 16,
  },
});
