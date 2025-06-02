import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { getAuth } from '@react-native-firebase/auth';

import { clearUser } from '../../redux/userSlice';

import { Header, Text, View } from '../../common';

import SettingOptionItem from '../components/setting/SettingOptionItem';

import SignOutSvg from '../../assets/images/sign_out.svg';
import FileLightSvg from '../../assets/images/file_light.svg';
import UserAddLightSvg from '../../assets/images/user_add_light.svg';

import * as colors from '../../config/colors';

const settingOptions = [
    {
        title: 'Switch account',
        icon: UserAddLightSvg,
    },
    {
        title: 'Rules and terms',
        icon: FileLightSvg,
    },
    {
        title: 'Sign out',
        icon: SignOutSvg,
    },
];

const SettingScreen = () => {
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();
    const naivgation = useNavigation();

    const [isLoading, setIsLoading] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const disabled = isLoading === '' ? false : true;

    const handleSwitchAccount = async () => {
        setIsLoading('Switch account');

        setTimeout(() => {
            setIsLoading('');
        }, 5000);
    };

    const handleNavigateToRulesAndTerms = () => {
        naivgation.navigate('RulesAndTerms');
    };

    const handleSignOut = async () => {
        try {
            setIsLoading('Sign out');

            await getAuth().signOut();
            dispatch(clearUser());

            setIsLoading('');
        } catch (err) {
            setErrorMessage(err.message);
        }
    };

    const getIndexGiveOnPress = (index) => {
        switch(index) {
            case 0:
                return handleSwitchAccount;
            case 1:
                return handleNavigateToRulesAndTerms;
            case 2:
                return handleSignOut;
            default:
                return () => {};
        }
    };

    return (
        <View flex={1} backgroundColor={colors.background_two} style={{paddingTop: insets.top}}>
            <Header title="Profile" disabled={disabled} />
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
                {settingOptions.map((item, index) => (
                    <SettingOptionItem
                        key={index}
                        item={item}
                        disabled={disabled}
                        isLoading={isLoading}
                        onPress={getIndexGiveOnPress(index)}
                    />
                ))}
                {errorMessage && (
                    <Text
                        size={14}
                        mt={10}
                        textAlign="center"
                        color={colors.text_error}
                    >
                        {errorMessage}
                    </Text>)}
           </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.background_one,
    },
    scrollContentContainer: {
        rowGap: 8,
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
});

export default SettingScreen;
