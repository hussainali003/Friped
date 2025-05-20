import {  TouchableOpacity, Text, StyleSheet } from 'react-native';

import * as colors from '../config/colors';

const Button = ({onPress, type, mb, title, children, textStyle, style}) => {
    const secondary = {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.secondary,
    };


    return (
        <TouchableOpacity  onPress={onPress} title="Send OTP" style={[styles.container, type === 'secondary' && secondary, {marginBottom: mb}, style]}>
            <Text style={[styles.text, type === 'secondary' && {color: colors.secondary}, textStyle]}>{title}</Text>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: colors.secondary,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: colors.white,
    },
});

export default Button;
