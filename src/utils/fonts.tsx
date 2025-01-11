import {Platform} from 'react-native';
import colors from './colors';

export const fontFamily = {
  Poppins: {
    light: 'Poppins-Light',
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    boldItalic: 'Poppins-BoldItalic',
  },
};

const familyDefault = fontFamily.Poppins;

export const fonts = {
  banner1: {
    fontSize: 78,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  banner2: {
    fontSize: 54,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  h1: {
    fontSize: 36,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  h2: {
    fontSize: 27,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  h3: {
    fontSize: 22,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  h4: {
    fontSize: 18,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  h5: {
    fontSize: 16,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  h6: {
    fontSize: 14,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  h7: {
    fontSize: 12,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  h8: {
    fontSize: 10,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  label: {
    fontSize: 12,
    fontFamily: familyDefault.medium,
    color: colors.text,
  },
  p: {
    fontSize: 12,
    fontFamily: familyDefault.regular,
    color: colors.text,
  },
  small: {
    fontSize: 10,
    fontFamily: familyDefault.regular,
    color: colors.text,
  },
  placeholder: {
    fontSize: 12,
    fontFamily: familyDefault.regular,
    color: colors.text,
  },
  btn: {
    fontSize: 12,
    fontFamily: familyDefault.medium,
    color: colors.text,
  },
  btn1: {
    fontSize: 12,
    fontFamily: familyDefault.bold,
    color: colors.text,
  },
  input: {
    fontSize: 12,
    fontFamily: familyDefault.regular,
  },
};
