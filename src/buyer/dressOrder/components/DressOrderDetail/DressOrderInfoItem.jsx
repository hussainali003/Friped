import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../config/colors';

const OrderInfoItem = ({title, description, style, text_oneStyle, text_twoStyle, textStyle}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.text_heading,  textStyle, text_oneStyle]}>{title}</Text>
            <Text style={[styles.text, textStyle, text_twoStyle]}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        rowGap: 4,
        paddingBottom: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#808080',
    },
    text_heading: {
        marginBottom: 4,
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: colors.text_primary,
    },
});

export default OrderInfoItem;
