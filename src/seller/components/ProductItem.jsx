import { Image, StyleSheet, Text, View } from 'react-native';

import * as colors from '../../config/colors';

const ProductItem = ({item, style, imageContainerStyle, contentContaienrStyle, titleStyle, textStyle}) => {
    const title = item?.name;
    const price = item?.price;
    const image = item?.image || '';

    return (
        <View style={[styles.container, style]}>
            <View style={[styles.imageContainer, imageContainerStyle]}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={[styles.contentContaienr, contentContaienrStyle]}>
                <Text style={[styles.title, titleStyle]}>{title}</Text>
                <Text style={[styles.text, textStyle]}>{`$${price} daily rental price`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.dashLine,
        backgroundColor: '#F8F2F3',
    },
    imageContainer: {
        width: 95,
        height: 70,
        overflow: 'hidden',
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    contentContaienr: {
        flex: 1,
        rowGap: 4,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        color: colors.dashLine,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.secondary,
    },
});

export default ProductItem;
