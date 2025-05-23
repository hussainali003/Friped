import { StyleSheet, View } from 'react-native';

import TransactionsListItemTitle from './TransactionsListItemTitle';
import TransactionsListItemFooter from './TransactionsListItemFooter';
import TransactionsListItemRatingSection from './TransactionsListItemRatingSection';

import * as colors from '../../../config/colors';

const TransactionsListItem = () => {

    return (
        <View style={styles.container}>
            <TransactionsListItemTitle />
            <TransactionsListItemRatingSection />
            <TransactionsListItemFooter />
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

export default TransactionsListItem;
