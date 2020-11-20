import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../components/Home';
import FavoritesScreen from '../components/Favorites';
import RecentsScreen from '../components/Recents';
import NearbyScreen from '../components/Nearby';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';



export default createBottomTabNavigator
    ({
        Home: { 
          screen: HomeScreen,
          navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor, activeTintColor}) => (
                   <Entypo name="home" size={24} color={tintColor} />
                   )
              },
        },
		Recents: { 
          screen: RecentsScreen,
          navigationOptions: {
                tabBarLabel: 'Recents',
                tabBarIcon: ({tintColor, activeTintColor}) => (
                   <Feather name="clock" size={24} color={tintColor} />
                   )
              },
        },
        Favorites:   { 
          screen: FavoritesScreen,
          navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: ({tintColor, activeTintColor}) => (
                   <MaterialIcon name="favorite" size={24} color={tintColor} />
                   )
              }, 
     },
	 Nearby: { 
          screen: NearbyScreen,
          navigationOptions: {
                tabBarLabel: 'Nearby',
                tabBarIcon: ({tintColor, activeTintColor}) => (
                  <IonIcon name="ios-location-outline" size={24} color={tintColor}/>
                   )
              },
        },
},

{
    initialRouteName: 'Home',
    tabBarOptions: {
       activeTintColor: '#fb9800',
       inactiveTintColor: '#7e7b7b',
       showIcon: true,
       style: { height: 54,backgroundColor: '#fff',borderTopWidth:0.5,borderTopColor: '#fb9800' },
       showLabel: true,
       labelStyle: {
        fontSize: 10,

       }
      }

});

