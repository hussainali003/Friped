import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../config/colors';

const DescriptionContent = ({title, description, style}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text_heading}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        rowGap: 8,
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    text: {
        lineHeight: 20,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#808080',
    },
    text_heading: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.text_primary,
    },
});

export default DescriptionContent;
