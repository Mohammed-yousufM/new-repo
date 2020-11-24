import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {Card, CardItem, Button} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {SearchBar} from 'react-native-elements';
import MapComp from './MapComp';
import UserNTools from './UserNTools';

//should store this in useState if data is coming from backend
const data = [
  {
    id: '1',
    userName: 'Andrew',
    tool: 'High pressure washer',
    // imgSource: '../assets/images/cat.png',
    imgSource: require('../assets/images/cat.png'),
    location: {latitude: 15.81983, longitude: 78.03986},
  },
  {
    id: '2',
    userName: 'Jessy',
    tool: 'Power tree cutter',
    // imgSource: '../assets/images/cat.png',
    imgSource: require('../assets/images/cat.png'),
    location: {latitude: 15.81983, longitude: 78.13986},
  },
  {
    id: '3',
    userName: 'Samuel',
    tool: 'Gardening tools set',
    // imgSource: '../assets/images/cat.png',
    imgSource: require('../assets/images/cat.png'),
    location: {latitude: 15.81983, longitude: 78.08986},
  },
  {
    id: '4',
    userName: 'Watson',
    tool: 'Sofa repair tools',
    // imgSource: '../assets/images/cat.png',
    imgSource: require('../assets/images/cat.png'),
    location: {latitude: 15.51983, longitude: 77.93986},
  },
  {
    id: '5',
    userName: 'Samuel',
    tool: 'Gardening tools set',
    // imgSource: '../assets/images/cat.png',
    imgSource: require('../assets/images/cat.png'),
    location: {latitude: 15.81983, longitude: 78.08986},
  },
  {
    id: '6',
    userName: 'Watson',
    tool: 'Sofa repair tools',
    // imgSource: '../assets/images/cat.png',
    imgSource: require('../assets/images/cat.png'),
    location: {latitude: 15.51983, longitude: 77.93986},
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: 120, backgroundColor: '#158BDC'}}>
        <View style={{flexDirection: 'row'}}>
          <Entypo name="menu" size={30} color="white" style={styles.menuIcon} />
          <Text style={styles.title}>Tools Sharing</Text>
          <IonIcon
            name="md-person-circle-sharp"
            size={28}
            color="white"
            style={styles.personIcon}
          />
          <FontAwesome
            name="power-off"
            size={27}
            color="white"
            style={styles.powerIcon}
          />
        </View>
        <View style={{marginLeft: 10, marginRight: 10, marginTop: 15}}>
          <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 5,
            }}
            inputContainerStyle={{backgroundColor: 'white', height: 30}}
            placeholderTextColor={'grey'}
            placeholder={'Search Items Here...'}
          />
        </View>
      </View>

      <View style={styles.bodyStyle}>
        <Card
          style={{
            flexDirection: 'row',
            marginTop: 10,
            // marginBottom: 10,
            paddingVertical: 5,
            backgroundColor: '#158BDC',
            borderRadius: 6,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={require('../assets/images/cat.png')}
              style={styles.imageStyle}
            />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 2,
                fontSize: 10,
              }}>
              Electrical
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={require('../assets/images/cat.png')}
              style={styles.imageStyle}
            />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 2,
                fontSize: 10,
              }}>
              Heavy Machines
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={require('../assets/images/cat.png')}
              style={styles.imageStyle}
            />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 2,
                fontSize: 10,
              }}>
              Gardening
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={require('../assets/images/cat.png')}
              style={styles.imageStyle}
            />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 2,
                fontSize: 10,
              }}>
              Construction
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Image
              source={require('../assets/images/cat.png')}
              style={styles.imageStyle}
            />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 2,
                fontSize: 10,
              }}>
              Electrical
            </Text>
          </View>
        </Card>
        <View
          style={{
            // flex: 1,
            // flexGrow: 1,
            justifyContent: 'space-between',
          }}>
          <Card style={{flexGrow: 0.5, borderRadius: 6}}>
            <Text>One more card container</Text>
          </Card>
          <Card style={{flexdirection: 'row', flexGrow: 1}}>
            <UserNTools data={data} />
          </Card>
        </View>
        <Card style={{marginBottom: 10, borderRadius: 6, overflow: 'hidden'}}>
          <MapComp data={data} />
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuIcon: {
    marginTop: 10,
    marginLeft: 20,
  },
  personIcon: {
    marginTop: 15,
    marginLeft: 120,
  },
  powerIcon: {
    marginTop: 17,
    marginLeft: 20,
  },
  title: {
    marginTop: 12,
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
  },
  searchField: {
    marginTop: 15,
    padding: 12,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    borderColor: '#888888',
    fontSize: 18,
    height: 45,
    backgroundColor: 'white',
  },
  bodyStyle: {
    flex: 1,
    // justifyContent: 'space-between',
    // borderColor: 'black',
    // paddingTop: 10,
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginLeft: 15,
    marginRight: 20,
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 11,
    paddingBottom: 9,
  },
});
