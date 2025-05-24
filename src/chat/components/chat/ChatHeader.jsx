import { useNavigation } from '@react-navigation/native';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

import InboxMenPng from '../../../assets/images_png/inbox_men.png';
import SettingBlackMediumSvg from '../../../assets/images/setting_black_medium.svg';
import ArrowLeftSvg from '../../../assets/images/arrow_left_light.svg';
import SearchAltLightSvg from '../../../assets/images/search_alt_light.svg';

import * as colors from '../../../config/colors';

const ChatHeader = ({item}) => {
    const navigation = useNavigation();
    const image = item?.image || InboxMenPng;
    const name = item?.name || 'Venz';
    const lastOnline = item?.lastOnline || 'Last seen yesterday';

    const handleNavigateToBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.navigate('Home');
        }
    };

    return (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={handleNavigateToBack} style={styles.leftButton}>
                <ArrowLeftSvg />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={image} />
                </View>
                <View>
                    <Text style={styles.text_heading}>{name}</Text>
                    <Text style={styles.text}>{lastOnline}</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.rightButton}>
                    <SearchAltLightSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButton}>
                    <SettingBlackMediumSvg />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 12,
    },
    leftButton: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16,
    },
    imageContainer: {
        height: 48,
        width: 48,
        borderRadius: 48 * 2,
        backgroundColor: colors.background_two,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 2,
        marginLeft: 'auto',
        paddingRight: 12,
    },
    rightButton: {
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#ADB5BD',
    },
    text_heading: {
        marginBottom: 4,
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: '##0F1828',
    },
});

export default ChatHeader;
