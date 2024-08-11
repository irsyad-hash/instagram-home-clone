import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { StoriesData } from '../utils/StoriesData';

const Stories = () => {
    return (
        StoriesData.map((item,index) => (
            <View key={index} style={[styles.storiesList]}>
                <View style={[styles.storyContainer]}>
                    <Image source={{uri:item.story.image}} style={[styles.storyImage]}/>
                </View>
                <Text style={[styles.username]}>{item.username}</Text>
            </View>
        )
    )
    )
}
const styles = StyleSheet.create({
  storiesList: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 10
  },
  storyContainer: {
    backgroundColor: '#ff1493',
    width: 80,
    height: 80,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    borderWidth: 3,
    borderColor: '#fff',
  },
  username: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});

export default Stories;
