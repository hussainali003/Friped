import { StyleSheet, Text, TextInput, View } from 'react-native';

import * as colors from '../../../../config/colors';

const PaymentTextInput = ({mb, maxLength, label, placeholder, left, right, style, labelStyle, inputContainerStyle, inputStyle}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
            <View style={[styles.inputContainer, inputContainerStyle]}>
                {left && (
                    <View style={styles.iconContainer}>
                        {left}
                    </View>
                )}
                <TextInput maxLength={maxLength} placeholder={placeholder} placeholderTextColor={'#77787D'} style={[styles.input, inputStyle]} />
                {right && (
                    <View style={styles.iconContainer}>
                        {right}
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 4,
        paddingBottom: 8,
    },
    label: {
        color: '#30313D',
        fontSize: 12,
        fontFamily: 'Lato-Regular',
    },
    inputContainer: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 4,
        paddingHorizontal: 3,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#E6E6E6',
    },
    iconContainer: {
        flexDirection: 'row',
        columnGap: 4,
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    input: {
        flex: 1,
        fontSize: 12,
        color: colors.text_primary,
    },
});

export default PaymentTextInput;
