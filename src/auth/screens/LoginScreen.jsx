/* eslint-disable react-native/no-inline-styles */
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, ScrollView, TextInput, Image } from 'react-native';

import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { getAuth, GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';

import { Button, Text, View, TouchableOpacity } from '../../common';

import LoginHeading from '../components/login/LoginHeading';

import AppNameSvg from '../../assets/images/app_name.svg';
import GoogleSvg from '../../assets/images/google_icon.svg';
import ChevronDownSvg from '../../assets/images/chevron_down.svg';
import PersonSettingSvg from '../../assets/images/person_setting.svg';

import PakistanFlagPng from '../../assets/images_png/pakistan_flag.png';

import { AuthContext } from '../../config/context';

import validatePhoneNumber from '../../util/validatePhoneNumber';

import * as colors from '../../config/colors';

const LoginScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const { sendCode } = useContext(AuthContext);

    const [phoneNumber, setPhoneNumber] = useState('');

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangeText = (e) => {
        setErrorMessage(null);
        setPhoneNumber(e);
    };

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

    const handleSignInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const signInResult = await GoogleSignin.signIn();

            const idToken = signInResult.data?.idToken;

            const googleCredential = GoogleAuthProvider.credential(idToken);

            await signInWithCredential(getAuth(), googleCredential);

        }   catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <View flex={1} backgroundColor={colors.background_two} style={{paddingTop: insets.top, paddingBottom: insets.bottom + 20}}>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
                <View alignItems="center" mb={35}>
                    <AppNameSvg />
                </View>
                <View alignItems="center" mb={35}>
                    <PersonSettingSvg />
                </View>
                <LoginHeading title="Log in or sign up" />
                <View flexDirection="row" alignItems="center" pv={6} mb={20} borderWidth={1} borderRadius={10} borderColor={colors.secondary}>
                    <View h={'100%'} flexDirection="row" alignItems="center" columnGap={6} ml={22} style={styles.inputContent}>
                        <Image source={PakistanFlagPng} style={{width: 24,height: 16}} />
                        <Text size={14}>92</Text>
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
                {errorMessage && <Text size={14} fontFamily="medium" textAlign="center" color={colors.text_error}>{errorMessage}</Text>}
                <Button loading={loading} onPress={handleSubmit} title="Send OTP" mb={25} />
                <LoginHeading title="OR" size="small" />
                <TouchableOpacity onPress={handleSignInWithGoogle} alignItems="center">
                    <GoogleSvg />
                </TouchableOpacity>
            </ScrollView>
            <Text fontFamily="light" mt={'auto'} textAlign="center" color={colors.text_dim}>By continuing you will accept the
                <Text> Terms of Use</Text>
                {' '}and
                <Text> Privacy and Policy</Text>
                {' '}of Cashlance.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContentContainer: {
        paddingTop: 30,
        paddingHorizontal: 16,
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Lato-Light',
        color: colors.text_primary,
    },
});

export default LoginScreen;
