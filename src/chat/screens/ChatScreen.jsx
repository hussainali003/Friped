import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ChatList from '../sections/chat/chatList';
import ChatFooter from '../sections/chat/ChatFooter';
import ChatHeader from '../components/chat/ChatHeader';

import * as colors from '../../config/colors';

const ChatScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <ChatHeader />
            <ChatList />
            <ChatFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
});

export default ChatScreen;
