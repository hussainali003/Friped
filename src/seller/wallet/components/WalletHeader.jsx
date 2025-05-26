import { useNavigation } from '@react-navigation/native';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import ArrowLeftSvg from '../../../assets/images/arrow_left_white.svg';
import SearchAltLightSvg from '../../../assets/images/search_alt_white.svg';
import MeassageLightSvg from '../../../assets/images/message_white.svg';
import BellPinLightSvg from '../../../assets/images/bell_pin_white.svg';

import * as colors from '../../../config/colors';

const WalletHeader = ({title}) => {
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
        <>
        <View style={styles.container}>
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
        <View style={styles.line} />
        </>
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
        color: colors.white,
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
    line: {
        height: 1,
        marginHorizontal: 16,
        marginBottom: 20,
        backgroundColor: colors.secondary,
    },
});

export default WalletHeader;
