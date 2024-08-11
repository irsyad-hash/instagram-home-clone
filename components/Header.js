import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const images = {
    image1: require('../assets/8n91YnfPq0s(1).png'),
  };
const Header = () => {
    return (
        <View style={[styles.upperContainer, { alignItems: 'center' }]}>
            <View style={styles.upperContainerSub} >
                <Image
                    source={images['image1']} style={styles.imageTitle}
                />
                <Icon name="expand-more" size={30} color="#000" />
            </View>
            <View style={[{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', gap: 10 }]}>
                <AntDesign name="hearto" size={24} color="black" />
                <FontAwesome5 name="facebook-messenger" size={24} color="black" />
            </View>
        </View>
    )
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
  });
  
export default Header;