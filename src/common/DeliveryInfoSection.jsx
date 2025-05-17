import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PinGreySvg from '../assets/images/pin_grey.svg';
import SettingSvg from '../assets/images/setting.svg';

import * as colors from '../config/colors';

const DeliveryInfoSection = () => {
    return (
        <View style={styles.deliveryInfoContainer}>
            <PinGreySvg/>
            <Text style={styles.deliveryInfoText}>Delivering to Delhi - 110074</Text>
            <TouchableOpacity style={styles.deliveryInfoSettingIconContainer}>
                <SettingSvg />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    deliveryInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        backgroundColor: colors.background_one,
    },
    deliveryInfoText: {
        marginLeft: 6,
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: colors.text_dim,
    },
    deliveryInfoSettingIconContainer: {
        marginLeft: 'auto',
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
});

export default DeliveryInfoSection;
