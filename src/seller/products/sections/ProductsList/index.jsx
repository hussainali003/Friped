import { FlatList, StyleSheet } from 'react-native';

import ProductListItem from './ProductsListItem';
import ProductListEmpty from './ProductsListEmpty';
import ProductListHeader from './ProductListHeader';

import data from '../../../../static/Products';

import * as colors from '../../../../config/colors';

const ProductList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={ProductListEmpty}
            ListHeaderComponent={ProductListHeader}
            contentContainerStyle={styles.flatListContentContainer}
            stickyHeaderIndices={[0]}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <ProductListItem item={item} />;

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatListContentContainer: {
        paddingBottom: 4,
    },
});

export default ProductList;
