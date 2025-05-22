/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PaymentTextInput from '../../components/orderPayment/PaymentTextInput';

import CardSvg from '../../../assets/images/card.svg';
import CardBlueSvg from '../../../assets/images/card_blue.svg';
import USBankSvg from '../../../assets/images/us_bank.svg';
import USBankBlueSvg from '../../../assets/images/us_bank_blue.svg';
import GooglePaySvg from '../../../assets/images/google_pay.svg';
import SettingSmallSvg from '../../../assets/images/setting_small.svg';
import MasterSvg from '../../../assets/images/master.svg';
import VisaSvg from '../../../assets/images/visa.svg';


import CreditCardCvcSvg from '../../../assets/images/credit_card_cvc.svg';
import { DropDown } from '../../../common';


// import * as colors from '../../../config/colors';

const paymentMethods = [
    {
        name: 'Card',
        icon: CardSvg,
        activeIcon: CardBlueSvg,
    },
    {
        name: 'Google Pay',
        icon: GooglePaySvg,

    },
    {
        name: 'Us bank account',
        icon: USBankSvg,
        activeIcon: USBankBlueSvg,
    },
    {
        title: 'setting',
        icon: SettingSmallSvg,
        activeIcon: USBankBlueSvg,
    },
];

const PaymentMethodSection = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedRole, setSelectedRole] = useState('');

    const handleChangeCard = (card) => {
        console.log(card);

        if (card === undefined) {
            return;
        }

        setSelectedCard(card);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Select a payment method</Text>
            </View>
            <View style={styles.selectCardContainer}>
                {paymentMethods.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleChangeCard(item.name)}
                        style={[styles.cardContainer,
                            selectedCard === item.name && styles.activeCard,
                            item.title && {flex: undefined},
                        ]}
                    >
                        {selectedCard === item.name ? item.activeIcon ? <item.activeIcon /> : <item.icon /> : <item.icon />}
                        <Text style={[styles.text, selectedCard === item.name && styles.activeCard]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <PaymentTextInput maxLength={16} label="Card number" placeholder="1234 1234 1234 1234" right={
                <>
                    <VisaSvg />
                    <MasterSvg />
                </>
            } />
            <View style={{flexDirection: 'row', columnGap: 8}}>
                <PaymentTextInput maxLength={4} label="Expiration" placeholder="MM/YY" />
                <PaymentTextInput maxLength={3} label="CVC" placeholder="CVC" right={<CreditCardCvcSvg />}/>
            </View>
            <DropDown
                label="Country"
                selected={selectedRole}
                setSelected={setSelectedRole}
                roles={['Pakistan', 'Turkey']}
                labelStyle={styles.dropDownLabel}
                selectorStyle={styles.dropDownSelector}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    titleContainer: {
        rowGap: 4,
        paddingBottom: 16,
        marginBottom: 18,
        borderBottomWidth: 1,
        borderColor: '#0958461A',
    },
    selectCardContainer: {
        flexDirection: 'row',
        columnGap: 6,
        marginBottom: 8,
    },
    cardContainer: {
        flex: 1,
        rowGap: 4,
        padding: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#E6E6E6',
    },
    activeCard: {
        color: '#0270DE',
        borderColor: '#0270DE',
    },
    dropDownLabel: {
        marginBottom: 4,
        fontSize: 12,
        color: '#30313D',
    },
    dropDownSelector: {
        paddingHorizontal: 8,
        borderColor: '#E6E6E6',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#6D6E78',
    },
    heading: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#30313D',
    },
});

export default PaymentMethodSection;
