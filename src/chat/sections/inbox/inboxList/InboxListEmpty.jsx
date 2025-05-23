import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../config/colors';

const InboxListEmpty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>There is no chat to show</Text>
        </View>
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

export default InboxListEmpty;
