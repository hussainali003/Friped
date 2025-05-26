import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import { DropDown } from '../../../../common';

import PaypalSvg from '../../../../assets/images/paypal.svg';

import * as colors from '../../../../config/colors';

const OtherPaymentSection = () => {
    const [selectedRole, setSelectedRole] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>Other payment method</Text>
            </View>
            <View style={styles.contentContainer}>
                <DropDown
                    label=""
                    selected={selectedRole}
                    setSelected={setSelectedRole}
                    roles={['Pakistan', 'Turkey']}
                    labelStyle={styles.dropDownLabel}
                    selectorStyle={styles.dropDownSelector}
                    selectTextStyle={styles.dropDownSelectText}
                />
                <DropDown
                    label=""
                    selected={selectedRole}
                    setSelected={setSelectedRole}
                    roles={['Pakistan', 'Turkey']}
                    labelStyle={styles.dropDownLabel}
                    selectorStyle={styles.dropDownSelector}
                    selectTextStyle={styles.dropDownSelectText}
                />
                <TouchableOpacity style={styles.selector}>
                    <PaypalSvg />
                    <Text style={[styles.selectedText]}>
                        Paypal
                    </Text>
                </TouchableOpacity>
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
        columnGap: 4,
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E6E6E6',
    },
    selectedText: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#77787D',
    },
    dropDownSelector: {
        paddingHorizontal: 8,
        borderColor: '#E6E6E6',
    },
    dropDownSelectText: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#77787D',
    },
});

export default OtherPaymentSection;
