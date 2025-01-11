import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {FC, useMemo} from 'react';
import colors, {shadow} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import FastImage from 'react-native-fast-image';
import {ImageBlur} from '../../../assets/images';
import {Rating} from '@kolking/react-native-rating';
import {
  IconBookmarkActive,
  IconBookmarkFillActive,
} from '../../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {
  getBookAuthor,
  getBookCover,
  getBookRating,
} from '../../../utils/helpers';

export interface CardBookProps {
  data: any;
  saved: boolean;
  onSavePress?(item: any): void;
}

const CARD_WIDTH = Dimensions.get('window').width / 2 - 24;

const CardBook: FC<CardBookProps> = props => {
  const {data, saved, onSavePress} = props;

  const nav = useNavigation();

  const coverUri = useMemo(() => {
    return getBookCover(data?.editions);
  }, [data?.editions]);

  const authorName = useMemo(() => {
    return getBookAuthor(data?.author_name);
  }, [data?.author_name]);

  const rating = useMemo(() => {
    return getBookRating(data?.ratings_count, data?.already_read_count);
  }, [data?.ratings_count, data?.already_read_count]);

  const goToDetail = () => {
    nav.navigate('book-detail', {data});
  };

  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={styles.container}>
        <View style={styles.cover}>
          <FastImage
            source={{uri: coverUri}}
            defaultSource={ImageBlur}
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
          <View style={styles.action}>
            <Rating size={12} rating={rating} disabled={true} />
            <TouchableOpacity onPress={() => onSavePress?.(data)}>
              <FastImage
                source={saved ? IconBookmarkFillActive : IconBookmarkActive}
                style={styles.bookmarkImg}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    overflow: 'hidden',
  },
  title: {
    ...fonts.h6,
    lineHeight: 18,
  },
  cover: {
    backgroundColor: colors.card,
    position: 'relative',
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
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bookmarkImg: {
    width: 24,
    height: 24,
  },
});
