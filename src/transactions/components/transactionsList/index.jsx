import { FlatList, StyleSheet } from 'react-native';

import TransactionsListItem from './TransactionsListItem';
import TransactionsListEmpty from './TransactionsListEmpty';

import data from '../../../static/Transactions';

import * as colors from '../../../config/colors';

const TransactionsList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={TransactionsListEmpty}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <TransactionsListItem item={item} />;

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatListContentContainer: {
        rowGap: 16,
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
});

export default TransactionsList;
