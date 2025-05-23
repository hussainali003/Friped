import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import LocationSavedItemButton from './LocationSavedItemButton';

import ShareSvg from '../../../assets/images/share.svg';
import SettingBlackSvg from '../../../assets/images/setting_black.svg';
import PinGreyMediumSvg from '../../../assets/images/pin_grey_medium.svg';

import * as colors from '../../../config/colors';

const LocationSavedItem = ({title, address, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <PinGreyMediumSvg />
            <View style={styles.contentContainer}>
                <Text style={[styles.text_heading]}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {address}
                </Text>
                <View style={styles.buttonsContainer}>
                    <LocationSavedItemButton icon={<SettingBlackSvg />}/>
                    <LocationSavedItemButton icon={<ShareSvg />}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 6,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E6E6E6',
    },
    contentContainer: {
        rowGap: 2,
    },
    buttonsContainer: {
        flexDirection: 'row',
        columnGap: 16,
        marginTop: 12,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#B0B0B0',
    },
    text_heading: {
        fontSize: 16,
        fontFamily: 'Lato-Medium',
        color: colors.text_primary,
    },
});

export default LocationSavedItem;
