import { StyleSheet, Text,  TextInput } from 'react-native';

import * as colors from '../../../config/colors';

const AddNewProductTextInput = ({label, placeholder, labelStyle, inputStyle}) => {
    return (
        <>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
            <TextInput numberOfLines={6} placeholder={placeholder} placeholderTextColor="#808080" style={[styles.input, inputStyle]} />
        </>
    );
};

const styles = StyleSheet.create({
    label: {
        marginBottom: 10,
        lineHeight: 20,
        color: colors.text_primary,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 16,
        textAlignVertical: 'top',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ED7D5B',
        color: colors.text_primary,
    },
});

export default AddNewProductTextInput;
