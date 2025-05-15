import { View, TextInput as RNTextInput, Text, StyleSheet } from 'react-native';

import * as colors from '../config/colors';

const TextInput = ({inputMode = 'text', label, placeholder, mb, textStyle, inputStyle, style}) => {
    return (
        <View style={[styles.container, {marginBottom: mb}, style]}>
            <Text style={[styles.label, textStyle]}>{label}</Text>
            <RNTextInput inputMode={inputMode} placeholder={placeholder} placeholderTextColor="#8C8C8C" style={[styles.input, inputStyle]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        rowGap: 8,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#8C8C8C',
        color: colors.text_dim,
    },
});

export default TextInput;
