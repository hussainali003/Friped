import React from 'react';
import { StyleSheet } from 'react-native';

import ChatMessage from '../../../components/chat/ChatMessage';

const ChatListItem = ({ item }) => {
    const currentUser = item?.user === 'me';

    return (
        <ChatMessage
            item={item}
            style={currentUser && styles.container}
            contentContainerStyle={currentUser && styles.contentContainer}
            textStyle={currentUser && styles.textStyle}
            recordingContainerStyle={currentUser && styles.recordingContainer}
            buttonStyle={currentUser && styles.buttonStyle}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 'auto',
    },
    contentContainer: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 0,
        backgroundColor: '#D0ECE8',
    },
    textStyle: {
        color: '#007665',
    },
    recordingContainer: {
        paddingLeft: 27,
        paddingRight: 7,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 0,
        backgroundColor: '#D0ECE8',
    },
    buttonStyle: {
        transform: [{ rotate: '180deg' }],
    },
});

export default ChatListItem;
