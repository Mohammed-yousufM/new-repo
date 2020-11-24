import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapComp = ({data}) => {
  return (
    <View>
      <MapView
        provider="google"
        initialRegion={{
          latitude: 15.81983,
          longitude: 78.03986,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{height: 230, width: '100%'}}>
        {data.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={item.location}
              title={item.title}
              pinColor="#3498db"
              showCallout>
              <View style={styles.calloutSquare}>
                <Text style={styles.labelHeader}>{item.tool}</Text>
              </View>
              <View style={styles.calloutTriangle} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

var styles = StyleSheet.create({
  calloutSquare: {
    backgroundColor: '#3498db',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 8,
    height: 40,
  },

  calloutTriangle: {
    backgroundColor: 'transparent',
    width: 20,
    height: 20,

    alignSelf: 'center',
    marginLeft: 20,

    borderStyle: 'solid',
    borderBottomColor: '#3498db',
    borderBottomWidth: 15,

    borderLeftWidth: 10,
    borderLeftColor: 'transparent',

    borderRightWidth: 10,
    borderRightColor: 'transparent',
    transform: [{rotate: '180deg'}],
  },

  labelHeader: {
    margin: 20,
    color: 'white',
    fontWeight: '500',
  },
});

export default MapComp;
