import { FlatList, StyleSheet } from 'react-native';

import DressesOrderListItem from './DressesOrderListItem';
import DressesOrderListEmpty from './DressesOrderListEmpty';

import data from '../../../../static/Orders';

import * as colors from '../../../../config/colors';

const DressesOrderList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={DressesOrderListEmpty}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <DressesOrderListItem item={item} />;

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

export default DressesOrderList;
