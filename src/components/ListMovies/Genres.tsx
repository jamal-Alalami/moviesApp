import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { dimensionsCal } from '../../utils/helpers';

interface props {
  genres: any;
  genre_ids: [];
}

const Genres = ({ genres, genre_ids }: props) => {

  const tags = useMemo(() => {
    return genre_ids?.map((genre: any) => {
      const title = genres[genre];
      return (<View key={title} style={styles.genreConstainer}>
        <Text style={styles.title}>{title}</Text>
      </View>);
    });
  }, [genre_ids, genres]);

  return (<View style={styles.container}>
    {tags}
  </View>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreConstainer: {
    paddingVertical: dimensionsCal(2),
    paddingHorizontal: dimensionsCal(8),
    borderRadius: dimensionsCal(16),
    backgroundColor: '#D8D8D8',
    margin: dimensionsCal(4),
    marginLeft: 0,
  },
  title: {
    fontSize: dimensionsCal(14),
    color: '#494B52',
  },
});
export default Genres;