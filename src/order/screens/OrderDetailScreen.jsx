/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, Header } from '../../common';

import UserDetail from '../components/UserDetail';
import OrderInfoItem from '../components/orderDetail/OrderInfoItem';

import DeliveryPartnerSection from '../sections/orderDetail/DeliveryPartnerSection';

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
        navigation.navigate('HomeTab', {screen: 'OrderPayment'});
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Details" />
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer} >
                <OrderInfoItem
                    title={`Order ID : ${orderId}`}
                    description={status}
                    style={{flexDirection: 'row', justifyContent: 'space-between'}}
                    text_twoStyle={{color: status === 'accepted' ? '#589D00' : '#C20000', textTransform: 'capitalize', marginRight: 1}}
                />
                <UserDetail
                    name={name}
                    price={price}
                    depositePrice={depositePrice}
                    dressImage={dressImage}
                    size={size}
                    phoneNumber={phoneNumber}
                    emailAddress={emailAddress}
                />
                <OrderInfoItem title="Delivery address" description={deliveryAddress} />
                <OrderInfoItem title="Pickup/return address:" description={pickUpAddress} />
                <OrderInfoItem title="Total day for rent" description={'2 days'} />
                <OrderInfoItem title="Security deposits" description={`$${depositePrice}`} />
                <OrderInfoItem title="Total rental price" description={`$${price + depositePrice}`} />
                <OrderInfoItem title="Total rental price" description={`$${price + depositePrice}`} />
                <DeliveryPartnerSection />
                <OrderInfoItem
                    title="Other information."
                    description="Security deposits are in place to safeguard the lender in the event of dress damage. The renter pays the deposit along with the rental fees upon reservation confirmation. If the dress is returned undamaged, the full security deposit is refunded. However, if damages occur, repair costs are subtracted from the deposit, with the remainder refunded to the renter."
                />
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
    button: {
        marginTop: 22,
        marginHorizontal: 0,
    },
});

export default OrderDetailScreen;
