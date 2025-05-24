import { StyleSheet, View } from 'react-native';

import * as colors from '../../../../config/colors';

const ChatListEmpty = () => {
    return (
        <View style={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lato-Medium',
        color: colors.text_primary,
    },
});

export default ChatListEmpty;
