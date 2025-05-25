import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../config/colors';

const ProductsListHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Products</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 16,
        backgroundColor: colors.background_one,
    },
    title: {
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default ProductsListHeader;
