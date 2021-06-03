import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import ListMovies from '../../components/ListMovies';
import Types from '../../components/Types';
import { startApp } from '../../navigation';

const HomeScreen = ({ componentId }: any) => {
  const [selectedType, setSelectedType] = useState('upcoming');

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Movies"
      />
      <Types
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <ListMovies
        selectedType={selectedType}
        componentId={componentId}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default HomeScreen;