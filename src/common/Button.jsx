import {  TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

import * as colors from '../config/colors';

const Button = ({onPress, loading = false, type, mb, title, children, textStyle, style}) => {
    const secondary = {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.secondary,
    };

    return (
        <TouchableOpacity  onPress={onPress} title="Send OTP" style={[styles.container, type === 'secondary' && secondary, {marginBottom: mb}, style]}>
            {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
            ) : (
                <Text style={[styles.text, type === 'secondary' && {color: colors.secondary}, textStyle]}>{title}</Text>
            )}
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
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
