import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Animated, ScrollView, FlatList } from 'react-native';
import { colors } from '../../constants';

import { styles } from './HomeScreen.styles';

const background = require('../../../assets/images/background.jpeg');

export const HomeScreen = ({ navigation }) => {

    const [posts, usePosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((response) => response.json())
            .then((json) => usePosts(json));
    }, [])

    const bgAnimValue = useRef(new Animated.Value(0)).current;

    const bgColor = bgAnimValue.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.darkGreen, 'red']
    })

    const handleMyProfileNavigationPress = () => navigation.push('Profile');

    const handleChangeBackground = (value) => () => {
        Animated.spring(bgAnimValue, {
            toValue: value,
            useNativeDriver: false
        }).start()
    }

    const renderItem = ({ item }) => (
        <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
        </View>
    )

    return (
        <Animated.View style={[styles.container, {
            backgroundColor: bgColor
        }]}>
            <View style={styles.sidebar}>
                <View style={styles.profile}>
                    <Image style={styles.profileBackgroundImage} source={background} />
                    <View style={styles.profilePicture} />
                    <View style={styles.profileContentContainer}>
                        <Text style={styles.name}>Georgian A.</Text>
                        <Text style={styles.tag}>@georgianspatiua</Text>
                    </View>
                    <View style={styles.followersContainer}>
                        <View style={styles.followers}>
                            <Text style={styles.followersNumber}>10</Text>
                            <Text style={styles.followersText}>Following</Text>
                        </View>
                        <View style={styles.followers}>
                            <Text style={styles.followersNumber}>10</Text>
                            <Text style={styles.followersText}>Followers</Text>
                        </View>
                    </View>
                    <View style={styles.myProfileButtonContainer}>
                        <Text onPress={handleMyProfileNavigationPress} style={styles.button}>My Profile</Text>
                    </View>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.typeSectionContainer}>
                    <View style={styles.profilePicture2} />
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder={"What's happening"}
                            placeholderTextColor={colors.darkGreen}
                            style={styles.textInput} onChangeText={() => console.log('aaa')}
                        />
                        <View style={styles.postButtons}>
                            <TouchableOpacity
                                style={[styles.postButton, { marginLeft: 0 }]}
                                onPress={handleChangeBackground(1)}
                            >
                                <Text style={styles.postButtonText}>red bg</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.postButton}
                                onPress={handleChangeBackground(0)}
                            >
                                <Text style={styles.postButtonText}>green bg</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.postButton}
                                onPress={() => console.log('hello')}
                            >
                                <Text style={styles.postButtonText}>Thread</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.postButton}
                                onPress={() => console.log('hello')}
                            >
                                <Text style={styles.postButtonText}>Schedule</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <FlatList
                    renderItem={renderItem}
                    data={posts}
                    keyExtractor={item => item.id}
                />
            </View>
        </Animated.View>
    )
}

