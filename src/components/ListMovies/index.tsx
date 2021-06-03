import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Api } from '../../services';
import { dimensionsCal } from '../../utils/helpers';
import MovieCard from './MovieCard';


interface props {
  selectedType: string;
  componentId: string;
}

const ListMovies = ({ selectedType, componentId }: props) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const getGenres = async () => {
      const response = await Api.genresCall({});
      if (response.data.genres) {
        let genresObj = {}
        response.data.genres.map(genre => {
          const { id = '', name = '' } = genre;
          genresObj[id] = name;
        })
        setGenres({ ...genresObj })
      }
    }
    getGenres();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const response = await Api.movieListCall({ type: selectedType });
      if (response?.data?.results) {
        setMovies(response?.data?.results);
      }
    }
    setMovies([]);
    getMovies();
  }, [selectedType]);

  const _renderItem = useCallback(({ item, index }) => <MovieCard item={item} genres={genres} componentId={componentId} />, [genres]);
  const _getItemLayout = useCallback((data: any, index: any) => ({ index, length: dimensionsCal(152), offset: (dimensionsCal(152) * index) }), []);
  const _keyExtractor = useCallback((item) => item.id, []);
  const _listEmptyComponent = useMemo(() => <ActivityIndicator color="#45B411" />, []);

  return (<FlatList
    data={movies}
    renderItem={_renderItem}
    getItemLayout={_getItemLayout}
    keyExtractor={_keyExtractor}
    ListEmptyComponent={_listEmptyComponent}
  />)
};

const styles = StyleSheet.create({
  constainer: {
    padding: dimensionsCal(16),
  },
  title: {
    fontSize: dimensionsCal(24),
    fontWeight: 'bold',
  },
});
export default ListMovies;