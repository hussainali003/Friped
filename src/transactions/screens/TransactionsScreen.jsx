import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../common';

import TransactionsList from '../components/transactionsList';

import * as colors from '../../config/colors';

const TransactionScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="List of transactions" />
            <TransactionsList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
});

export default TransactionScreen;
