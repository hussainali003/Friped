import { useRoute } from '@react-navigation/native';
import { useContext, useRef, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, StackHeader, Text, View } from '../../common';

import VerifyTextInput from '../components/login/VerifyTextInput';

import { AuthContext } from '../../config/context';

import * as colors from '../../config/colors';

const VerifyScreen = () => {
    const route = useRoute();
    const inputs = useRef([]);
    const insets = useSafeAreaInsets();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(''));

    const { verifyCode } = useContext(AuthContext);

    const phoneNumber = route?.params?.phoneNumber;

    const handleInputChange = (e, index) => {
        setOtp(prev => prev.map((item, i) => {
            if (i === index) {
                return e;
            }
            return item;
        }));
        if (e && index < otp.length - 1) {
            inputs.current[index + 1].focus();
        }
        setErrorMessage('');
    };

    const handleKeyPress = ({ nativeEvent }, index) => {
        if (nativeEvent.key === 'Backspace' && index > 0) {
            if (otp[index] === '') {
                inputs.current[index - 1].focus();
            }
        } else {
            if (otp[index] !== '' && index < otp.length - 1 && index !== 0) {
                inputs.current[index + 1].focus();
            }
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        const code = otp.join('');

        try {
            await verifyCode(code);
        } catch (err) {
            setErrorMessage(err.message);
        }
        setLoading(false);
    };

    return (
        <View flex={1} backgroundColor={colors.background_two} style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <StackHeader title="Verify OTP" mb={25}/>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
                <Text size={16} mb={16}>Enter OTP sent on {phoneNumber}</Text>
                <Text size={14} color={'#999999'}>Enter OTP</Text>
                <View flexDirection="row" alignItems="center" justifyContent="space-between" columnGap={25} mv={8}>
                    {otp.map((_,index) => {
                        return (
                            <VerifyTextInput
                                key={index}
                                index={index}
                                otp={otp}
                                inputs={inputs}
                                handleInputChange={handleInputChange}
                                handleKeyPress={handleKeyPress}
                                handleSubmit={handleSubmit}
                                />
                            );
                    } )}
                </View>
                {errorMessage && (
                    <Text
                    size={14}
                    mb={8}
                    textAlign="center"
                    color={colors.text_error}
                    >
                        {errorMessage}
                    </Text>
                )}
                <Text size={14} mb={30}>Resend OTP in 25 sec</Text>
                <Button loading={loading} onPress={handleSubmit} title="Verify Now" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContentContainer: {
        paddingHorizontal: 16,
    },
});

export default VerifyScreen;
