import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../constants';

import { styles } from './HomeScreen.styles';

const background = require('../../../assets/images/background.jpeg');

export const HomeScreen = ({ navigation }) => {

    const handleMyProfileNavigationPress = () => navigation.push('Profile');

    return (
        <View style={styles.container}>
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
                                style={[styles.postButton, {marginLeft: 0}]}
                                onPress={() => console.log('hello')}
                            >
                                <Text style={styles.postButtonText}>Photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.postButton}
                                onPress={() => console.log('hello')}
                            >
                                <Text style={styles.postButtonText}>Video</Text>
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
            </View>
        </View>
    )
}

