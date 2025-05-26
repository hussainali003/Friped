import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    Header,
} from '../../../common';

import AddProductSection from '../sections/AddProductSection';

import * as colors from '../../../config/colors';
import ProductList from '../sections/ProductsList';

const ProductsScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Products"/>
            <AddProductSection />
            <ProductList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
});

export default ProductsScreen;
