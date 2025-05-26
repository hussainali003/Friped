import { FlatList, StyleSheet } from 'react-native';

import OrdersListItem from './OrdersListItem';
import OrdersListEmpty from './OrdersListEmpty';

import data from '../../../../static/Orders';

import * as colors from '../../../../config/colors';

const OrdersList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={OrdersListEmpty}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <OrdersListItem item={item} />;

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

export default OrdersList;
