import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {FC, useMemo} from 'react';
import colors, {shadow} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import FastImage from 'react-native-fast-image';
import {NO_IMAGE_URI} from '../../../constants/app';
import {ImageNoImage} from '../../../assets/images';
import {Rating} from '@kolking/react-native-rating';

export interface CardBookProps {
  data: any;
}

const CARD_WIDTH = Dimensions.get('window').width / 2 - 24;

const CardBook: FC<CardBookProps> = props => {
  const {data} = props;

  const coverUri = useMemo(() => {
    if (!data?.editions) return NO_IMAGE_URI;

    const {editions} = data;
    const docKey = editions?.docs?.[0]?.key;
    if (!docKey) return NO_IMAGE_URI;

    const olid = docKey.split('/')?.[2];
    if (!olid) return NO_IMAGE_URI;

    return `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
  }, [data?.editions]);

  const authorName = useMemo(() => {
    if (!data?.author_name) return '';

    return data.author_name.join(', ');
  }, [data?.author_name]);

  const rating = useMemo(() => {
    if (!data?.ratings_count || !data?.already_read_count) return 0;
  
    const averageRating = data.ratings_count / data.already_read_count;
    const convertedRating = (averageRating * 4) + 1;
  
    return Math.min(Math.max(convertedRating, 1), 5);
  }, [data?.ratings_count, data?.already_read_count]);

  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <FastImage
          source={{uri: coverUri}}
          defaultSource={ImageNoImage}
          style={styles.img}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {data?.title}
        </Text>
        <Text style={styles.desc} numberOfLines={2}>
          {authorName}
        </Text>
        <Rating size={12} rating={rating} disabled={true} />
      </View>
    </View>
  );
};

export default CardBook;

const styles = StyleSheet.create({
  container: {
    ...shadow.medium,
    backgroundColor: colors.background,
    width: CARD_WIDTH,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.card,
    borderRadius: 4,
    rowGap: 8,
  },
  title: {
    ...fonts.h6,
    lineHeight: 18,
  },
  cover: {
    backgroundColor: colors.card,
  },
  img: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.5,
  },
  body: {
    paddingHorizontal: 8,
    marginBottom: 8,
    rowGap: 2,
  },
  desc: {
    ...fonts.small,
  },
});
