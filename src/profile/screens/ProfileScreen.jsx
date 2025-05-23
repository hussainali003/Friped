import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '../../common';

import EditProfileImage from '../sections/ProfileMediaSection';
import ProfileOption from '../components/Profile/ProfileOption';

import PinGreySvg from '../../assets/images/pin_grey.svg';
import QuestionSvg from '../../assets/images/question.svg';
import StarLightSvg from '../../assets/images/star_light.svg';
import PaperLightSvg from '../../assets/images/paper_light.svg';
import SettingGearSvg from '../../assets/images/setting_gear.svg';

import * as colors from '../../config/colors';

const profileOptions = [
    {
        title: 'Address',
        icon: PinGreySvg,
    },
    {
        title: 'Rating',
        icon: StarLightSvg,
    },
    {
        title: 'Transaction',
        icon: PaperLightSvg,
    },
    {
        title: 'Setting',
        icon: SettingGearSvg,
    },
    {
        title: 'Faq',
        icon: QuestionSvg,
    },
];

const ProfileScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Profile" />
            <EditProfileImage />
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
                {profileOptions.map((item, index) => (
                    <ProfileOption key={index} title={item.title} left={<item.icon />}/>
                ))}
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
        paddingTop: 80,
    },
});

export default ProfileScreen;
