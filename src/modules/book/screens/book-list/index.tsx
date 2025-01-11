import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useBookList} from './functions';
import {LoadWrapper} from '../../../../components/layouts';
import {CardBook} from '../../../../components/cards';
import colors from '../../../../utils/colors';
import {InputTextSearch} from '../../../../components/forms';
import FastImage from 'react-native-fast-image';
import {ImageIllusEmpty, ImageIllusSearch} from '../../../../assets/images';
import {fonts} from '../../../../utils/fonts';
import {MIN_KEYWORD_LENGTH} from '../../../../constants/app';
import {SkeletonMain} from '../../../../components/loaders';

const BookList = (props: any) => {
  const {
    loading,
    data,
    paginate,
    refreshing,
    keyword,
    action: {getData, onRefresh, setKeyword},
  } = useBookList(props);

  const renderItem = ({item}: any) => {
    return <CardBook data={item} />;
  };

  const renderListEmpty = () => {
    const isNotFound = keyword.length >= MIN_KEYWORD_LENGTH;

    return (
      <View style={styles.empty}>
        <FastImage
          style={styles.emptyImg}
          source={isNotFound ? ImageIllusEmpty : ImageIllusSearch}
        />
        <Text style={styles.emptyDesc}>
          {isNotFound
            ? `Sorry, we couldn't find the book you were looking for`
            : 'Enter keywords to find the book you need.'}
        </Text>
      </View>
    );
  };

  const renderListFooter = () => {
    if (loading === 'pending' && paginate === 'next') {
      return <SkeletonMain />;
    }

    return;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <InputTextSearch
          placeholder={"Discover books... (e.g., 'Harry Potter')"}
          onSearch={setKeyword}
        />
      </View>
      <LoadWrapper
        loading={loading}
        refreshing={refreshing}
        paginate={paginate}>
        <FlatList
          style={styles.container}
          contentContainerStyle={{flexGrow: 1}}
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
          ListEmptyComponent={renderListEmpty}
          ListFooterComponent={renderListFooter}
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
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
  emptyImg: {
    width: 220,
    height: 220,
  },
  emptyDesc: {
    ...fonts.p,
    textAlign: 'center',
  },
});
