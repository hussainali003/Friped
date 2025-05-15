import {  TouchableOpacity, Text, StyleSheet } from 'react-native';

import * as colors from '../config/colors';

const Button = ({mb, title, children, textStyle, style}) => {
    return (
        <TouchableOpacity  title="Send OTP" style={[styles.container, {marginBottom: mb}, style]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
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
