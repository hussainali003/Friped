import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as colors from '../../../config/colors';

const TransferButton = ({icon, title, onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                {icon}
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        rowGap: 8,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: colors.white,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lato-Medium',
        color: colors.white,
    },
});

export default TransferButton;
