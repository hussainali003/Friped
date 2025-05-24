import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../config/colors';

const FeedBackListHeader = () => {

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>Seller’s feedback</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 18,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
        backgroundColor: colors.background_two,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        color: colors.text_primary,
    },
});

export default FeedBackListHeader;
