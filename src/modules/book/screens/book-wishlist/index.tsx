import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../../utils/colors';
import {useBookWishlist} from './functions';
import {CardBook} from '../../../../components/cards';
import FastImage from 'react-native-fast-image';
import {ImageIllusEmpty, ImageIllusWishlist} from '../../../../assets/images';
import {fonts} from '../../../../utils/fonts';
import {Navbar} from '../../../../components/layouts';

const BookWhislist = (props: any) => {
  const {
    wishlist,
    action: {handleWishlist},
  } = useBookWishlist(props);

  const renderItem = ({item}: any) => {
    const saved = wishlist.some((list: any) => list?.key === item?.key);
    return <CardBook data={item} saved={saved} onSavePress={handleWishlist} />;
  };

  const renderListEmpty = () => {
    return (
      <View style={styles.empty}>
        <FastImage style={styles.emptyImg} source={ImageIllusWishlist} />
        <Text style={styles.emptyDesc}>
          You haven't added any books to your wishlist yet.
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Navbar title={'Wishlist'} />
      <FlatList
        style={styles.container}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 16}}
        data={wishlist}
        keyExtractor={(item, index) => item?.key}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={renderItem}
        ListEmptyComponent={renderListEmpty}
      />
    </SafeAreaView>
  );
};

export default BookWhislist;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 16,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
  emptyImg: {
    width: 260,
    height: 220,
  },
  emptyDesc: {
    ...fonts.p,
    textAlign: 'center',
  },
});
