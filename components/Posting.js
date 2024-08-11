import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { postesData } from '../utils/StoriesData';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const Posting = () => {
    return (
        <>
            <View style={[styles.container]}>
                <View style={[styles.postUpperContainer]}>
                    <View style={[styles.postLeftUpperContainer]}>
                        <View style={[styles.postListLeft]}>
                            <Image source={{ uri: 'https://iili.io/d0cQa7s.jpg' }} style={[styles.postImage]} />
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>Levi Ackerman</Text>
                    </View>
                    <View>
                        <View>
                            <MaterialIcons name="more-vert" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </View>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D' }} style={[styles.imageMiddle]} />
            <View style={[styles.postUpperContainer]}>
                <View style={[styles.postLeftBottomContainer]}>
                    <View>
                        <AntDesign name="hearto" size={24} color="black" />
                    </View>
                    <View>
                        <Ionicons style={{transform:[{scaleX: -1}]}} name="chatbubble-outline" size={24} color="black" />
                    </View>
                    <View>
                    <Ionicons name="paper-plane-outline" size={24} color="black" />
                    </View>
                </View>
                <View>
                    <View>
                    <Feather name="bookmark" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={[styles.container]}>
                <View style={[styles.postMiddleContainer]}>
                    <View style={[styles.postLeftMiddleContainer]}>
                        <View style={[styles.postListMiddle]}>
                            <Image source={{ uri: 'https://iili.io/d0cQ5rX.jpeg' }} style={[styles.postImage]} />
                        </View>
                        <View style={[styles.postListMiddle]}>
                            <Image source={{ uri: 'https://iili.io/d0cQR1t.jpg' }} style={[styles.postImage]} />
                        </View>
                        <View style={[styles.postListMiddle]}>
                            <Image source={{ uri: 'https://iili.io/d0cQ5rX.jpeg' }} style={[styles.postImage]} />
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>Liked by Dova and 9 ohter</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.postUpperContainer]}>Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur</Text>
            <Text style={{paddingHorizontal:10, color:"grey", fontWeight:"bold"}}>View all 5 comments</Text>
            <Text style={{paddingHorizontal:10, color:"grey", marginTop: 5, marginBottom: 10}}>6 months ago</Text>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    postUpperContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    postMiddleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginLeft: 5
    },
    postLeftUpperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    postLeftMiddleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingLeft: 20
    },
    postLeftBottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    postListLeft: {
        backgroundColor: '#ff1493',
        width: 40,
        height: 40,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: '#ff8501',
    },
    postListMiddle: {
        backgroundColor: '#ff1493',
        width: 30,
        height: 30,
        borderRadius: 200,
        marginLeft: -20
    },
    postImage: {
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
    imageMiddle: {
        width: '100%',
        aspectRatio: 1
    }
});

export default Posting;