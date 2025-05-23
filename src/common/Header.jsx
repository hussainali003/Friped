import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowLeftSvg from '../assets/images/arrow_left_light.svg';
import SearchAltLightSvg from '../assets/images/search_alt_light.svg';
import MeassageLightSvg from '../assets/images/message_light.svg';
import BellPinLightSvg from '../assets/images/bell_pin_light.svg';

const Header = ({title, mb, style}) => {
    const navigation = useNavigation();

    const handleNavigateToBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.navigate('Home');
        }
    };

    const handleNavigateToInbox = () => {
        navigation.navigate('HomeTab', { screen: 'Inbox'});
    };

    return (
        <View style={[styles.container, {marginBottom: mb}, style]}>
            <TouchableOpacity onPress={handleNavigateToBack} style={styles.leftButton}>
                <ArrowLeftSvg />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.rightButton}>
                    <SearchAltLightSvg />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToInbox} style={styles.rightButton}>
                    <MeassageLightSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButton}>
                    <BellPinLightSvg />
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
    },
    leftButton: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 20,
        fontWeight: 400,
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 2,
        marginLeft: 'auto',
        paddingRight: 12,
    },
    rightButton: {
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
});

export default Header;
