import { FlatList, StyleSheet } from 'react-native';

import OrderListItem from './OrderListItem';
import OrderListEmpty from './OrderListEmpty';

import data from '../../../static/Orders';

import * as colors from '../../../config/colors';

const OrderList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={OrderListEmpty}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <OrderListItem item={item} />;

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatListContentContainer: {
        paddingTop: 20,
        paddingHorizontal: 16,
    },
});

export default OrderList;
