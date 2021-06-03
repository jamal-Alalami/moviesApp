import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { dimensionsCal } from '../utils/helpers';

const types = [{ id: 'upcoming', name: 'Upcoming' }, { id: 'popular', name: 'Popular' }, { id: 'top_rated', name: 'Top Rated' }];

interface props {
  setSelectedType: any;
  selectedType: string;
}

const Types = ({ setSelectedType, selectedType }: props) => {

  const renderTypes = useMemo(() => types.map(type => {
    const { name = "", id = "" } = type;
    return (
      <TouchableOpacity
        onPress={() => setSelectedType(id)}>
        <View style={[styles.button, selectedType === id ? styles.selectedButton : {}]}>
          <Text style={[styles.text, selectedType === id ? styles.selectedText : {}]}>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }), [setSelectedType, selectedType]);

  return (<View style={styles.constainer}>
    {renderTypes}
  </View>)
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: dimensionsCal(16),
    paddingBottom: dimensionsCal(8),
  },
  title: {
    fontSize: dimensionsCal(24),
    fontWeight: 'bold',
  },
  button: {
    padding: dimensionsCal(8),
    borderRadius: dimensionsCal(16),
    backgroundColor: '#D8D8D8',
    paddingHorizontal: dimensionsCal(16),
  },
  selectedButton: {
    backgroundColor: '#48B514',
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: {
      height: 3,
      width: 0
    },
    elevation: 2,
  },
  text: {
    fontSize: dimensionsCal(14),
    color: '#1B1E26',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
});
export default Types;