import { StyleSheet, View } from 'react-native';

import OrdersListItemTitle from './OrdersListItemTitle';
import OrdersListItemFooter from './OrdersListItemFooter';
import OrdersListItemRatingSection from './OrdersListItemRatingSection';

import * as colors from '../../../../config/colors';

const OrdersListItem = () => {

    return (
        <View style={styles.container}>
            <OrdersListItemTitle />
            <OrdersListItemRatingSection />
            <OrdersListItemFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.dashLine,
        backgroundColor: colors.background_two,
    },
});

export default OrdersListItem;
