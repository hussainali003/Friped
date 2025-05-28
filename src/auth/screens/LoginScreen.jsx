/* eslint-disable react-native/no-inline-styles */
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';

import { Button } from '../../common';

import AppNameSvg from '../../assets/images/app_name.svg';
import GoogleSvg from '../../assets/images/google_icon.svg';
import ChevronDownSvg from '../../assets/images/chevron_down.svg';
import PersonSettingSvg from '../../assets/images/person_setting.svg';

import PakistanFlagPng from '../../assets/images_png/pakistan_flag.png';

import LoginHeading from '../components/login/LoginHeading';

import validatePhoneNumber from '../../util/validatePhoneNumber';

import { AuthContext } from '../../config/context';

import * as colors from '../../config/colors';

const LoginScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const { sendCode } = useContext(AuthContext);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async () => {
        setLoading(true);
        const error = validatePhoneNumber(phoneNumber);

        if (error) {
            setErrorMessage(error);
            setLoading(false);

            return;
        }

        const phoneNumberFormat = `+92${phoneNumber}`;

        try {
            await sendCode(phoneNumberFormat);
            setPhoneNumber('');
            navigation.navigate('Verify');
        } catch (err) {
            setErrorMessage(err.message);
        }
        setLoading(false);
    };

    const handleChangeText = (e) => {
        setErrorMessage(null);
        setPhoneNumber(e);
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
                <View style={styles.iconContainer}>
                    <AppNameSvg />
                </View>
                <View style={styles.iconContainer}>
                    <PersonSettingSvg />
                </View>
                <LoginHeading title="Log in or sign up" />
                <View style={styles.inputContainer}>
                    <View style={styles.inputContent}>
                        <Image source={PakistanFlagPng} style={{width: 24,height: 16}} />
                        <Text style={{fontSize: 14}}>92</Text>
                        <ChevronDownSvg />
                    </View>
                    <TextInput
                        value={phoneNumber}
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="3111040571"
                        style={styles.input}
                        onSubmitEditing={handleSubmit}
                        onChangeText={(e) => handleChangeText(e)}
                        placeholderTextColor={colors.text_dim}
                    />
                </View>
                {errorMessage && <Text style={styles.text_error}>{errorMessage}</Text>}
                <Button loading={loading} onPress={handleSubmit} title="Send OTP" mb={25} />
                <LoginHeading title="OR" size="small" />
                <TouchableOpacity style={styles.buttonContainer}>
                    <GoogleSvg />
                </TouchableOpacity>
            </ScrollView>
            <Text style={styles.text}>By continuing you will accept the
                <Text style={styles.text_heading}> Terms of Use</Text>
                {' '}and
                <Text style={styles.text_heading}> Privacy and Policy</Text>
                {' '}of Cashlance.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    scrollViewContentContainer: {
        paddingTop: 30,
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 35,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        marginHorizontal: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.secondary,
    },
    inputContent: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
        marginLeft: 22,
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Lato-Light',
        color: colors.text_primary,
    },
    text_error: {
        marginHorizontal: 16,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        color: colors.text_error,
    },
    buttonContainer: {
      alignItems: 'center',
    },
    text: {
        marginTop: 'auto',
        marginBottom: 20,
        marginHorizontal: 16,
        textAlign: 'center',
        fontFamily: 'Lato-Light',
        color: colors.text_dim,
    },
    text_heading: {
        color: colors.text_dim,
        fontFamily: 'Lato-Regular',
    },
});

export default LoginScreen;
