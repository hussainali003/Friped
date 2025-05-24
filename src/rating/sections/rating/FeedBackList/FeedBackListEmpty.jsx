import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../config/colors';

const FeedBackListEmpty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No rating to show</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default FeedBackListEmpty;
