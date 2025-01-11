import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React, {FC, useState} from 'react';
import {fonts} from '../../../utils/fonts';
import colors from '../../../utils/colors';
import { MIN_KEYWORD_LENGTH } from '../../../constants/app';

export interface InputTextSearchProps extends TextInputProps {
  onSearch?(value: string): void;
}

const InputTextSearch: FC<InputTextSearchProps> = props => {
  const {onSearch} = props;

  const [text, setText] = useState('');
  
  const onSubmit = () => {
    if (text.length < MIN_KEYWORD_LENGTH) return;
    onSearch?.(text)
  }

  return (
    <TextInput
      {...props}
      style={styles.input}
      keyboardType={'web-search'}
      onChangeText={setText}
      onSubmitEditing={onSubmit}
    />
  );
};

export default InputTextSearch;

const styles = StyleSheet.create({
  input: {
    ...fonts.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
});
