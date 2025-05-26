import { Image, StyleSheet, Text, View } from 'react-native';

import WeddingDressBook from '../../../../assets/images_png/wedding_dress_book.png';

import * as colors from '../../../../config/colors';

const DetailSection = ({details}) => {
    const name = details?.name || 'Mermaid wedding dress';
    const depositePrice = details?.depositePrice || '20';
    const color = details?.color || 'White';
    const fabric = details?.fabric || 'Net';
    const conditionOfDress = details?.conditionOfDress || 'Used one time';
    const size = details?.size || 'M';

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.text_one]}>Fill the details to place a order</Text>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.imageContainer}>
                    <Image source={WeddingDressBook} style={styles.image} />
                </View>
                <View style={styles.detailContainerFlex}>
                    <View style={styles.detailContainer_one}>
                        <Text style={[styles.text, styles.text_two]}>{name}</Text>
                        <Text style={[styles.text, styles.text_two]}>{`(${size})`}</Text>
                    </View>
                    <View>
                        <Text style={[styles.text, styles.text_three]}>{`Security deposit price: $${depositePrice}`}</Text>
                        <Text style={[styles.text, styles.text_three]}>{`Colour: ${color}`}</Text>
                        <Text style={[styles.text, styles.text_three]}>{`Type of fabric: ${fabric}`}</Text>
                        <Text style={[styles.text, styles.text_three]}>{`Condition of dress: ${conditionOfDress}`}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    textContainer: {
        padding: 18,
        marginBottom: 14,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#B0B0B0',
    },
    text_one: {
        color: colors.text_primary,
    },
    detailContainer: {
        columnGap: 18,
        flexDirection: 'row',
    },
    imageContainer: {
        backgroundColor: 'red',
        width: 58,
        height: 105,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    detailContainerFlex: {
        flex: 1,
    },
    detailContainer_one: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#B0B0B0',
    },
    text_two: {
        fontSize: 16,
        color: colors.dashLine,
    },
    text_three: {
        marginBottom: 6,
        color: '#666666',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
    },
});

export default DetailSection;
