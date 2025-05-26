import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../../config/colors';

const WalletListEmpty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No transfer make yet.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default WalletListEmpty;
