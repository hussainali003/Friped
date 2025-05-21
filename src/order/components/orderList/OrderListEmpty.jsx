import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../config/colors';

const OrderListEmpty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No order to show</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default OrderListEmpty;
