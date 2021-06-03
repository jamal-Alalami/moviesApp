import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import Header from '../../components/Header';
import Genres from '../../components/ListMovies/Genres';
import { pop } from '../../navigation';
import { Api } from '../../services';
import { dimensionsCal } from '../../utils/helpers';
import Credits from './Credits';

const MovieScreen = ({ movie, componentId, genres }: any) => {
  const { release_date = "", poster_path = "", vote_average = "", genre_ids = [], original_title = "", overview = "", id = "" } = movie;

  const _onPress = useCallback(() => pop(componentId), []);
  return (
    <SafeAreaView style={styles.container}>
      <Header back={true} onPress={_onPress} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <View style={styles.imageContainer}
          >
            <FastImage source={{ uri: 'https://image.tmdb.org/t/p/w500' + poster_path }} style={styles.image} />
          </View>
          <Text style={styles.title}>{original_title}</Text>
          <Text style={styles.voteText}>{parseInt(parseFloat(vote_average) * 10) + '%'}</Text>
        </View>
        <View style={styles.overView}>
          <Text style={styles.overViewText}>Overview</Text>
          <Text numberOfLines={5} style={styles.overViewMainText}>{overview}</Text>
        </View>
        <View style={styles.overView}>
          <Text style={styles.overViewText}>Genres</Text>
          <Genres
            genres={genres}
            genre_ids={genre_ids}
          />
        </View>
        <View style={styles.overView}>
          <Text style={styles.overViewText}>Credits</Text>
        </View>
        <Credits id={id} />
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  imageContainer: {
    height: dimensionsCal(240),
    width: dimensionsCal(160),
    borderRadius: dimensionsCal(16),
    marginBottom: dimensionsCal(16),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: dimensionsCal(16),
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimensionsCal(16),
  },
  title: {
    fontSize: dimensionsCal(28),
    marginBottom: dimensionsCal(8),
  },
  voteText: {
    color: '#45B411',
    fontSize: dimensionsCal(20),
    fontWeight: 'bold',
  },
  overView: {
    padding: dimensionsCal(16),
  },
  overViewText: {
    fontSize: dimensionsCal(16),
    fontWeight: 'bold',
    marginBottom: dimensionsCal(8),
  },
  overViewMainText: {
    fontSize: dimensionsCal(14),
    color: '#717171'
  }
});
export default MovieScreen;