import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const FavoritesScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>My Profile</Text>
  </SafeAreaView>
);

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
  	flex:1,
  	padding:50,
  	alignItems:"center",
  },
  title: {
  	marginTop:100,
    fontSize: 25,
    fontWeight: 'bold',
  },
});