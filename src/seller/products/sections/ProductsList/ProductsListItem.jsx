import { StyleSheet } from 'react-native';

import ProductItem from '../../../components/ProductItem';

const ProductListItem = ({item}) => {
    return (
        <ProductItem item={item} style={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
});

export default ProductListItem;
