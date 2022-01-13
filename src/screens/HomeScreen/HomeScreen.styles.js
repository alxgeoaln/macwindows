import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.darkGreen
    },
    sidebar: {
        width: '30%',
    },
    main: {
        width: '70%',
    },
    profile: {
        borderRadius: 10,
        margin: 5,
        backgroundColor: colors.green
    },
    profileBackgroundImage: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: 75
    },
    profilePicture: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'green',
        alignSelf: 'center',
        top: 50
    },
    profileContentContainer: {
        paddingTop: 35,
        alignItems: 'center',
        paddingBottom: 10
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.darkGreen,
    },
    tag: {
        marginTop: 10,
        fontWeight: '600',
        color: colors.darkGreen,
    },
    followersContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.lightGreen,
    },
    followers: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderLeftWidth: 1,
        borderColor: colors.lightGreen,
    },
    followersNumber: {
        color: colors.darkGreen,
        fontWeight: 'bold',
        fontSize: 20
    },
    followersText: {
        color: colors.lightGreen,
        fontWeight: '600',
        fontSize: 15
    },
    myProfileButtonContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontWeight: 'bold',
        color: colors.darkGreen
    },
    typeSectionContainer: {
        borderRadius: 10,
        margin: 5,
        borderWidth: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.green,
    },
    profilePicture2: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        borderRadius: 50
    },
    inputContainer: {
        flex: 1,
        marginLeft: 10,
    },
    textInput: {
        padding: 5,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.lightGreen,
        justifyContent: 'center',
        color: colors.darkGreen,
        marginBottom: 10
    },
    postButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    postButton: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.lightGreen,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    postButtonText: {
        color: colors.lightGreen,
        fontWeight: 'bold',
        fontSize: 14,
    },
    postContainer: {
        borderRadius: 10,
        backgroundColor: colors.lightGreen,
        marginBottom: 10,
        marginHorizontal: 5,
        padding: 10
    },
    postTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    }
})
