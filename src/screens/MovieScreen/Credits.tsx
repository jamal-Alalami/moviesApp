import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { startApp } from '../../navigation';
import { Api } from '../../services';
import { dimensionsCal } from '../../utils/helpers';

const Credits = ({ id }: any) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getCredit = async () => {
      const response = await Api.creditCall({ movie_id: id });
      if (response?.data?.cast) {
        setCast(response.data.cast);
      }
    }
    getCredit();
  }, [id]);

  const _renderItem = useCallback(({ item, index }) => {
    const { profile_path = "", name = "" } = item;
    return (<View style={styles.credit}>
      <View style={styles.imgContainer}>
        <FastImage source={{ uri: 'https://image.tmdb.org/t/p/w200' + profile_path }} style={styles.image} />
      </View>
      <View style={{}}>
        <Text numberOfLines={2} style={styles.name}>{name}</Text>
      </View>
    </View>)
  }, []);
  return (
    <FlatList
      data={cast}
      renderItem={_renderItem}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
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
    width: dimensionsCal(80),
    height: dimensionsCal(80),
    borderRadius: dimensionsCal(40),
    marginBottom: dimensionsCal(8)
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: dimensionsCal(40)
  },
  credit: {
    marginHorizontal: dimensionsCal(12),
    width: dimensionsCal(86)
  },
  name: {
    flex: 1,
    textAlign: 'center',
    fontSize: dimensionsCal(16),
  },
});
export default Credits;