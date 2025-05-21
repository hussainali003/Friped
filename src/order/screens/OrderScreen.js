import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../common';

import * as colors from '../../config/colors';
import OrderList from '../components/orderList';

const OrderScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Book a dress" />
            <OrderList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: colors.text_primary,
    },
});

export default OrderScreen;
