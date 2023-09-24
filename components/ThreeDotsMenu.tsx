import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const ThreeDotsVerticalMenu = () => {
  return (
    <TouchableOpacity style={styles.dotsContainer} onPress={() => {/* Handle the press event here */}}>
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    justifyContent: 'space-between',
    height: 20,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#828282',
    marginBottom: 2, // Jarak antar titik
  },
});

export default ThreeDotsVerticalMenu;
