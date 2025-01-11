import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import colors from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import FastImage from 'react-native-fast-image';
import {IconBack} from '../../../assets/icons';
import {useNavigation} from '@react-navigation/native';

export interface NavbarProps {
  title: string;
}

const Navbar: FC<NavbarProps> = props => {
  const {title} = props;
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      {nav?.canGoBack() && (
        <TouchableOpacity onPress={nav.goBack}>
          <FastImage
            source={IconBack}
            style={styles.icon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  title: {
    ...fonts.h5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
