import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { dimensionsCal } from '../utils/helpers';

interface headerProps {
  title?: string;
  back?: string;
  onPress?: any;
}

const Header = ({ title, back, onPress }: headerProps) => {
  return (<View style={styles.constainer}>
    {back ? <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
    >
      <View style={styles.imageContianer}>
        <FastImage source={require('assets/icons/back.png')} style={styles.image} resizeMode="contain" />
      </View>
    </TouchableOpacity> : <Text style={styles.title}>{title}</Text>}
  </View>);
};

const styles = StyleSheet.create({
  constainer: {
    padding: dimensionsCal(16),
  },
  title: {
    fontSize: dimensionsCal(24),
    fontWeight: 'bold',
  },
  imageContianer: {
    width: dimensionsCal(16),
    height: dimensionsCal(16),
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
export default Header;