import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../config/colors';

const TransactionsListItemTitle = ({item}) => {
    const orderId = item?.orderId || '20340005';
    const price = item?.price || 30;

    return (
            <View style={styles.container}>
                <Text style={styles.text}>{`Order ID : ${orderId}`}</Text>
                <Text style={styles.text}>{`$${price}`}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    text: {
        lineHeight: 21,
        fontSize: 16,
        textTransform: 'capitalize',
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default TransactionsListItemTitle;
