import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const NearbyScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>My Nearby</Text>
  </SafeAreaView>
);

export default NearbyScreen;

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