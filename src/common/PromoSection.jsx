import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import HangingClothesSvg from '../assets/images/hanging_clothes.svg';

import * as colors from '../config/colors';

const PromoSection = () => {

    return (
        <View style={styles.promoContainer}>
            <View style={styles.promoContentContainer}>
                <Text style={[styles.text, styles.promoContentContainerText_one]}>Generate income</Text>
                <Text style={[styles.text, styles.promoContentContainerText_two]}>From the clothing in your wardrobe.</Text>
                <TouchableOpacity style={styles.promoContentContainerButton}>
                    <Text style={[styles.text]}>Signup now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.promoContainerHangingClothesContainer}>
                <HangingClothesSvg />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    promoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 24,
        marginTop: 30,
        backgroundColor: colors.secondary,
    },
    promoContentContainer: {
        marginLeft: 16,
        marginBottom: 14,
        maxWidth: 180,
    },
    promoContentContainerText_one: {
        marginBottom: 6,
        fontSize: 20,
    },
    promoContentContainerText_two: {
        flexShrink: 1,
        marginBottom: 15,
        color: '#DCDCDC',
    },
    promoContentContainerButton: {
        alignSelf: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 23,
        marginTop: 'auto',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.white,
    },
    promoContainerHangingClothesContainer: {
        alignSelf: 'flex-end',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: colors.white,
    },
});

export default PromoSection;
