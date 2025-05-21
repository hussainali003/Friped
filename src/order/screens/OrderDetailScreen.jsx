/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, Header } from '../../common';

import UserDetailSection from '../section/orderDetail/UserDetailSection';

import MondiaSvg from '../../assets/images/mondia.svg';
import WeddingMermaidRegularPng from '../../assets/images_png/wedding_mermaid_regular.png';

import * as colors from '../../config/colors';

const OrderDetailScreen = ({item}) => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const orderId = item?.orderId || '20340005';
    const deliveryAddress = item?.deliveryAddress || 'Garages et Ateliers Municipaux, 71 - 77 Rue Cartier Bresson';
    const pickUpAddress = item?.pickUpAddress || 'Garages et Ateliers Municipaux, 71 - 77 Rue Cartier Bresson';
    const size = item?.size || 'L';
    const phoneNumber = item?.phoneNumber || '+1 (555) 543-2109';
    const emailAddress = item?.emailAddress || 'marywilliam@example.com';
    const depositePrice = item?.depositePrice || 20;
    const price = item?.price || 30;
    const name = item?.name || 'Mermaid wedding dress';
    const status = item?.status || 'accepted';
    const dressImage = item?.dressImage || WeddingMermaidRegularPng;

    const handleNavigateToPayment = () => {
        navigation.navigate('HomeTab', {screen: 'Payment'});
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Details" />
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer} >
                <View style={[styles.textContainer, styles.textContainer_one]}>
                    <Text style={styles.text_heading}>Order ID : {orderId}</Text>
                    <Text style={[styles.text_heading,  {color: status === 'accepted' ? '#589D00' : '#C20000', textTransform: 'capitalize', marginRight: 1}]}>{status}</Text>
                </View>
                <UserDetailSection
                    name={name}
                    price={price}
                    depositePrice={depositePrice}
                    dressImage={dressImage}
                    size={size}
                    phoneNumber={phoneNumber}
                    emailAddress={emailAddress}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text_heading}>Delivery address</Text>
                    <Text style={styles.text}>{deliveryAddress}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text_heading}>Pickup/return address:</Text>
                    <Text style={styles.text}>{pickUpAddress}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text_heading}>Total day for rent</Text>
                    <Text style={[styles.text, {textTransform: 'none'}]}>2 days</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text_heading}>Security deposits</Text>
                    <Text style={styles.text}>{`$${depositePrice}`}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text_heading}>Total rental price</Text>
                    <Text style={styles.text}>{`$${price + depositePrice}`}</Text>
                </View>
                <View style={[styles.textContainer, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <View>
                        <Text style={styles.text_heading}>Delivery Partner</Text>
                        <Text style={styles.text}>mondial relay</Text>
                        <Text style={styles.text}>Delivery number 123456789123</Text>
                    </View>
                    <MondiaSvg />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text_heading}>Other information.</Text>
                    <Text style={styles.text}>Security deposits are in place to safeguard the lender in the event of dress damage. The renter pays the deposit along with the rental fees upon reservation confirmation. If the dress is returned undamaged, the full security deposit is refunded. However, if damages occur, repair costs are subtracted from the deposit, with the remainder refunded to the renter.</Text>
                </View>
                <Button onPress={handleNavigateToPayment} title="Make a payment now" style={styles.button} />
            </ScrollView>
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
        paddingHorizontal: 16,
    },
    textContainer: {
        rowGap: 4,
        paddingBottom: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    textContainer_one: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 22,
        marginHorizontal: 0,
    },
    text_heading: {
        marginBottom: 4,
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.text_primary,
    },
    text: {
        textTransform: 'capitalize',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#808080',
    },
});

export default OrderDetailScreen;
