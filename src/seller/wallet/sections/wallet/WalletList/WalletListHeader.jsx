import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../../config/colors';

const WalletListHeader = () => {

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>Transfer Status</Text>
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
        paddingHorizontal: 16,
        paddingVertical: 10,
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

export default WalletListHeader;
