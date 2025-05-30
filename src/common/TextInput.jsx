import { View, TextInput as RNTextInput, Text, StyleSheet } from 'react-native';

import * as colors from '../config/colors';

const TextInput = ({inputMode = 'text', value, label, placeholder, mb, textStyle, inputStyle, onChangeText, style}) => {
    return (
        <View style={[styles.container, {marginBottom: mb}, style]}>
            <Text style={[styles.label, textStyle]}>{label}</Text>
            <RNTextInput
                value={value}
                inputMode={inputMode}
                placeholder={placeholder}
                placeholderTextColor="#8C8C8C"
                onChangeText={(e) => onChangeText(e)}
                style={[styles.input, inputStyle]}
            />
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
