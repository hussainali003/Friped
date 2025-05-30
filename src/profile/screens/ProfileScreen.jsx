import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '../../common';

import ProfileOptionItem from '../components/Profile/ProfileOptionItem';

import PinGreySvg from '../../assets/images/pin_grey.svg';
import QuestionSvg from '../../assets/images/question.svg';
import StarLightSvg from '../../assets/images/star_light.svg';
import PaperLightSvg from '../../assets/images/paper_light.svg';
import SettingGearSvg from '../../assets/images/setting_gear.svg';

import * as colors from '../../config/colors';

const profileOptions = [
    {
        title: 'LocationOptions',
        icon: PinGreySvg,
    },
    {
        title: 'Rating',
        icon: StarLightSvg,
    },
    {
        title: 'Transactions',
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
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    {profileOptions.map((item, index) => (
                        <ProfileOptionItem key={index} title={item.title} left={<item.icon />}/>
                    ))}
                </View>
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
    contentContainer: {
        marginTop: 80,
        marginBottom: 30,
        marginHorizontal: 16,
    },
});

export default ProfileScreen;
