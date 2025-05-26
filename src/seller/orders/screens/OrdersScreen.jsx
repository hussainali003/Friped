import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../../common';

import OrdersList from '../components/ordersList';
import OrderDropDown from '../components/OrdersDropDown';

import * as colors from '../../../config/colors';

const paymentRoles = ['paid', 'unpaid'];
const orderRoles = ['Completed', 'Rejected', 'Pending'];

const OrdersScreen = () => {
    const insets = useSafeAreaInsets();
    const [selectedRole, setSelectedRole] = useState('');

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Orders" />
            <View style={styles.dropDownsContainer}>
                <OrderDropDown title="Payment status" selected={selectedRole} setSelected={setSelectedRole} roles={paymentRoles} />
                <OrderDropDown title="Order status" selected={selectedRole} setSelected={setSelectedRole} roles={orderRoles} />
            </View>
            <OrdersList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    dropDownsContainer: {
        flexDirection: 'row',
        columnGap: 20,
        paddingHorizontal: 16,
        backgroundColor: colors.background_one,
    },
    dropDown: {
        backgroundColor: 'red',
    },
});

export default OrdersScreen;
