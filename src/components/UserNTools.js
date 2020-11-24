import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

const UserNTools = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <View
            style={{
              borderColor: '#EAECEE',
              width: '50%',
              borderWidth: 0.5,
              borderStyle: 'solid',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              // source={{uri: item.imgSource}}
              source={item.imgSource}
              style={{width: 40, height: 40, marginHorizontal: 5}}
            />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: 60,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text>{item.userName}</Text>
                <Text style={{fontSize: 9, paddingLeft: 5}}>Searching for</Text>
              </View>
              <Text>{item.tool}</Text>
            </View>
          </View>
        );
      }}
      horizontal={false}
      numColumns={2}
      ListHeaderComponent={() => (
        <View style={{borderWidth: 0.5, borderColor: '#EAECEE'}} />
      )}
      ListFooterComponent={() => (
        <View style={{borderWidth: 0.5, borderColor: '#EAECEE'}} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default UserNTools;
