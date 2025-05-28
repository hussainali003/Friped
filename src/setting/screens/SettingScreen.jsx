import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../common';

import SettingOptionItem from '../components/setting/SettingOptionItem';

import FileLightSvg from '../../assets/images/file_light.svg';
import SignOutSvg from '../../assets/images/sign_out.svg';
import UserAddLightSvg from '../../assets/images/user_add_light.svg';

import * as colors from '../../config/colors';
import { getAuth } from '@react-native-firebase/auth';

const SettingScreen = () => {
    const insets = useSafeAreaInsets();
    const naivgation = useNavigation();

    const handleNavigateToRulesAndTerms = () => {
        naivgation.navigate('HomeTab', {screen: 'RulesAndTerms'});
    };

    const handleLogout = async () => {
        try {
            await getAuth().signOut();
        } catch (err) {

        }
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Profile" />
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
                <SettingOptionItem title="Switch account" left={<UserAddLightSvg />} />
                <SettingOptionItem onPress={handleNavigateToRulesAndTerms} title="Rules and terms" left={<FileLightSvg />} />
                <SettingOptionItem onPress={handleLogout} title="Sign out" left={<SignOutSvg />} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
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
