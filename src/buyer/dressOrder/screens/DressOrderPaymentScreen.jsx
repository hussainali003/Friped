import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../../common';

import PriceDetailSection from '../sections/dressOrderPayment/PriceDetailSection';
import OtherPaymentSection from '../sections/dressOrderPayment/OtherPaymentSection';
import PaymentCompleteModal from '../sections/dressOrderPayment/PaymentCompleteModal';
import PaymentMethodSection from '../sections/dressOrderPayment/PaymentMethodSection';
import DeliveryOptionSection from '../sections/dressOrderPayment/DeliveryOptionSection';

import * as colors from '../../../config/colors';

const DressOrderPaymentScreen = () => {
    const insets = useSafeAreaInsets();
    const [isModalVisiable, setIsModalVisiable] = useState(false);

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Make a payment" />
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
                <PaymentMethodSection />
                <OtherPaymentSection />
                <DeliveryOptionSection />
                <PriceDetailSection setIsModalVisiable={setIsModalVisiable} />
            </ScrollView>
            <PaymentCompleteModal isVisible={isModalVisiable} setIsVisiable={setIsModalVisiable} />
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
    scrollContentContainer: {
        paddingVertical: 20,
    },
});

export default DressOrderPaymentScreen;
