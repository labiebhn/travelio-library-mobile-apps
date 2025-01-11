import {Platform} from 'react-native';

export const shadow = {
  low: {
    shadowColor: '#00000038',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: Number(Platform.Version) >= 30 ? 5 : 1.5,
  },
  medium: {
    shadowColor: '#00000038',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: Number(Platform.Version) >= 30 ? 8 : 2.5,
  },
};

const colors = {
  primary: '#A7D2E8',
  secondary: '#CAF7E3',
  background: '#FFFFFF',
  text: '#333333',
  border: '#DEE3ED',
  card: '#F6F9FC',
};

export default colors;
