import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import StarFillSvg from '../../../assets/images/star_fill.svg';

import * as colors from '../../../config/colors';

const TransactionsListItemRatingSection = ({item}) => {
    const name = item?.name || 'Mermaid wedding dress';

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={[styles.text, styles.buttonText]}>Exchange rating</Text>
                <StarFillSvg />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 8,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 1,
        padding: 4,
        borderRadius: 4,
        backgroundColor: colors.secondary,
    },
    buttonText: {
        color: colors.white,
    },
    text: {
        lineHeight: 21,
        textTransform: 'capitalize',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default TransactionsListItemRatingSection;
