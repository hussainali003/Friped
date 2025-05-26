import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../config/colors';

const DeliveryOptionSection = () => {
    const [isDeliveryOnCash, setIsDeliveryOnCash] = useState(false);

    const handleChange = (delivery) => {
        setIsDeliveryOnCash(!delivery);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>Pay on delivery option</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={[styles.container]}>
                      <TouchableOpacity
                        onPress={() => handleChange(isDeliveryOnCash)}
                        style={styles.selector}
                      >
                        <View style={[styles.circle, isDeliveryOnCash === true && styles.activeCircle]} />
                        <Text style={[styles.selectedText]}>
                          Cash on delivery
                        </Text>
                      </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 18,
        marginBottom: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
        backgroundColor: colors.background_two,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        color: colors.text_primary,
    },
    contentContainer: {
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
    selector: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 6,
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E6E6E6',
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 12 * 2,
        borderWidth: 1,
        borderColor: colors.dashLine,
    },
    activeCircle: {
        backgroundColor: colors.dashLine,
    },
    selectedText: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#77787D',
    },
});

export default DeliveryOptionSection;
