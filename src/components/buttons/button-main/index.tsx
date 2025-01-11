import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {fonts} from '../../../utils/fonts';
import colors from '../../../utils/colors';

export interface ButtonMainProps extends TouchableNativeFeedbackProps {
  title: string;
}

const ButtonMain: FC<ButtonMainProps> = props => {
  const {title} = props;
  return (
    <TouchableNativeFeedback {...props}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ButtonMain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  title: {
    ...fonts.btn,
    textAlign: 'center',
    color: colors.background,
  },
});
