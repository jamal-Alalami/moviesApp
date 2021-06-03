import React from 'react';
import {
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');

export const dimensionsCal = (IPhonePixel: number) => {
  return width * IPhonePixel / 375;
};
