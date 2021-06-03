import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { push, screenIds } from '../../navigation';
import { dimensionsCal } from '../../utils/helpers';
import Genres from './Genres';

interface props {
  item: any;
  genres: any;
  componentId: string;
}

const MovieCard = ({ item, genres, componentId }: props) => {
  const { original_title = "", release_date = "", poster_path = "", vote_average = "", genre_ids = [], id = "" } = item;
  const _onPress = useCallback(() => push(componentId, screenIds.MOVIES_SCREEN, { movie: item, genres }, {}), [])
  return (
    <TouchableOpacity onPress={_onPress}>

      <View style={styles.constainer}>
        <View style={styles.imageContainer} >
          <FastImage source={{ uri: 'https://image.tmdb.org/t/p/w500' + poster_path }} style={styles.image} />
        </View>
        <View style={styles.metaDataConstainer}>
          <Text style={styles.title}>{original_title}</Text>
          <Text style={styles.date}>{release_date}</Text>
          <Genres
            genres={genres}
            genre_ids={genre_ids}
          />
        </View>
        <View style={styles.vote}>
          <Text style={styles.voteText}>{parseInt(parseFloat(vote_average) * 10) + '%'}</Text>
        </View>
      </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
  constainer: {
    padding: dimensionsCal(16),
    backgroundColor: '#fff',
    margin: dimensionsCal(16),
    marginBottom: 0,
    borderRadius: dimensionsCal(14),
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 0
    },
    elevation: 2,
    flexDirection: 'row',
  },
  title: {
    fontSize: dimensionsCal(16),
    fontWeight: 'bold',
    color: '#494B52',
    marginBottom: dimensionsCal(8),
  },
  date: {
    fontSize: dimensionsCal(14),
    color: '#494B52',
    marginBottom: dimensionsCal(8),
  },
  imageContainer: {
    height: dimensionsCal(120),
    width: dimensionsCal(80),
    borderRadius: dimensionsCal(16),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: dimensionsCal(16),
  },
  metaDataConstainer: {
    flex: 1,
    paddingHorizontal: dimensionsCal(12),
  },
  vote: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  voteText: {
    color: '#45B411',
    fontSize: dimensionsCal(20),
    fontWeight: 'bold',
  },

});
export default MovieCard;