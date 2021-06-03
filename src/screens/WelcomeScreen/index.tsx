import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { startApp } from '../../navigation';

const WelcomeScreen = () => {

  useEffect(() => {
    setTimeout(() => {
      startApp();
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <FastImage source={require('assets/images/logo.png')} style={styles.image} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imgContainer: {
    width: 400,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default WelcomeScreen;