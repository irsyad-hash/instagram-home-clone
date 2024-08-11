import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Header from './components/Header';
import Stories from './components/Stories';
import Posting from './components/Posting';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function App() {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
          <Stories />
        </ScrollView>
        <Posting />
        <Posting />
        <Posting />
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <View style={styles.bottomBorder}>
        <Entypo name="home" size={24} color="black" />
        <Feather name="search" size={24} color="black" />
        <Octicons name="diff-added" size={24} color="black" />
        <MaterialIcons name="ondemand-video" size={24} color="black" />
        <View style={[styles.postListLeft]}>
          <Image source={{ uri: 'https://iili.io/d0cQa7s.jpg' }} style={[styles.postImage]} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

  },
  upperContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 10
  },
  upperContainerSub: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  upperContainerIcon: {
    backgroundColor: '#0084ff'
  },
  fontUpperContainer: {
    fontSize: 40
  },
  imageTitle: {
    width: 110,
    resizeMode: 'contain',
  },
  storyContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#000fff'
  },
  imageStory: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 35,
    marginLeft: 6,
    borderWidth: 2,
    borderColor: '#ff00ff'
  },
  postImage: {
    width: 25,
    height: 25,
    borderRadius: 200,
},
  bottomBorder: {
    borderWidth: 0.5,
    borderColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

