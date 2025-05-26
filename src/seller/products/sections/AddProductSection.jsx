import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ProductBasketSvg from '../../../assets/images/product_basket.svg';
import AddSquareSvg from '../../../assets/images/add_square.svg';

import * as colors from '../../../config/colors';

const AddProductSection = ({item}) => {
    const navigation = useNavigation();
    const products = item?.products || 10;

    const handleNavigateToAddNewProduct = () => {
        navigation.navigate('DashboardTab', {screen: 'AddNewProduct'});
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleNavigateToAddNewProduct}
                style={[styles.contentContainer, styles.contentContainer_one]}
            >
                <AddSquareSvg />
                <Text>Add new Product</Text>
            </TouchableOpacity>
            <View style={[styles.contentContainer, styles.contentContainer_two]}>
                <ProductBasketSvg />
                <Text style={styles.contentContainerText_one}>Total Products</Text>
                <Text style={styles.contentContainerText_two}>{products}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 20,
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: colors.background_one,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 125,
        borderRadius: 8,
    },
    contentContainer_one: {
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    contentContainer_two: {
        backgroundColor: colors.dashLine,
    },
    contentContainerText_one: {
        fontSize: 14,
        color: '#F1F1F1',
    },
    contentContainerText_two: {
        fontSize: 14,
        color: colors.white,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default AddProductSection;
