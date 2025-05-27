import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, StackHeader } from '../../common';

import * as colors from '../../config/colors';

const VerifyScreen = () => {
    const inputs = useRef([]);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [otp, setOtp] = useState(new Array(5).fill(''));

    const handleInputChange = (text, index) => {
        if (text && index < 4) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = ({ nativeEvent }, index) => {
        if (nativeEvent.key === 'Backspace' && index > 0) {
        inputs.current[index - 1].focus();
        }
    };

    const handleToNavigateToProfile = () => {
        navigation.navigate('EditProfile');
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <StackHeader title="Verify OTP" mb={25}/>
            <Text style={[styles.text, styles.text_one]}>Enter OTP sent on  +91  9896787494</Text>
            <Text style={[styles.text, styles.text_two]}>Enter OTP</Text>
            <View style={styles.inputContainer}>
                {otp.map((i,index) => {
                    return (
                        <TextInput
                            key={index}
                            inputMode="numeric"
                            cursorColor={colors.text_dim}
                            maxLength={1}
                            onChangeText={(text) => handleInputChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            ref={(ref) => (inputs.current[index] = ref)}
                            style={styles.input}
                        />
                    );
                } )}
            </View>
            <Text style={[styles.text, styles.text_three]}>Resend OTP in 25 sec</Text>
            <Button onPress={handleToNavigateToProfile} title="Verify Now" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    text: {
        fontFamily: 'Lato-Light',
        marginHorizontal: 14,
        fontSize: 12,
        color: colors.text_dim,
    },
    text_one: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        marginBottom: 16,
        color: colors.text_primary,
    },
    text_two: {
        marginBottom: 8,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        columnGap: 25,
        marginHorizontal: 16,
        marginBottom: 8,
    },
    input: {
        width: 46,
        height: 46,
        textAlign: 'center',
        color: colors.text_dim,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.secondary,
    },
    text_three: {
        marginBottom: 40,
    },
});

export default VerifyScreen;
