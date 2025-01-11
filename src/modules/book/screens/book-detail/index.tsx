import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useBookDetail} from './functions';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../../utils/colors';
import {Gap, Navbar} from '../../../../components/layouts';
import FastImage from 'react-native-fast-image';
import {ImageBlur} from '../../../../assets/images';
import {fonts} from '../../../../utils/fonts';
import {Rating} from '@kolking/react-native-rating';
import {ButtonMain} from '../../../../components/buttons';

const WINDOW_WIDTH = Dimensions.get('window').width;

const BookDetail = (props: any) => {
  const {
    data,
    coverUri,
    authorName,
    rating,
    hasSaved,
    action: {handleWishlist},
  } = useBookDetail(props);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Navbar title={'Book Detail'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.cover}>
            <FastImage
              source={{uri: coverUri}}
              style={styles.img}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.info}>
            <Text style={fonts.h3}>{data?.title}</Text>
            <Text style={fonts.p}>By: {authorName}</Text>
            <Gap height={4} />
            <View style={styles.rating}>
              <Rating size={16} rating={rating} disabled={true} />
              <Text style={{...fonts.p, marginTop: 4}}>
                {rating.toFixed(1)} ({data?.ratings_count || 0} ratings) •{' '}
                {data?.already_read_count} have read
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <ButtonMain
          title={hasSaved ? 'Remove from wishlist' : 'Add to wishlist'}
          onPress={handleWishlist}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    rowGap: 16,
  },
  cover: {
    backgroundColor: colors.card,
  },
  img: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH,
  },
  info: {
    paddingHorizontal: 16,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  footer: {
    padding: 16,
  },
});
