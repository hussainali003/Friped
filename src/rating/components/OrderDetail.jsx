/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View } from 'react-native';

import UserDetail from './UserDetail';

import WeddingMermaidRegularPng from '../../assets/images_png/wedding_mermaid_regular.png';

import * as colors from '../../config/colors';

const OrderDetail = ({item}) => {
    const orderId = item?.orderId || '20340005';
    const size = item?.size || 'L';
    const phoneNumber = item?.phoneNumber || '+1 (555) 543-2109';
    const emailAddress = item?.emailAddress || 'marywilliam@example.com';
    const depositePrice = item?.depositePrice || 20;
    const price = item?.price || 30;
    const name = item?.name || 'Mermaid wedding dress';
    const status = item?.status || 'accepted';
    const dressImage = item?.dressImage || WeddingMermaidRegularPng;

    return (
        <>
            <View style={styles.textContainer}>
                <Text style={styles.text_heading}>Order ID : {orderId}</Text>
                <Text style={[styles.text_heading,
                    {color: status === 'accepted' ? '#589D00' : '#C20000', textTransform: 'capitalize', marginRight: 1},
                ]}>
                    {status}
                </Text>
            </View>
            <UserDetail
                name={name}
                price={price}
                depositePrice={depositePrice}
                dressImage={dressImage}
                size={size}
                phoneNumber={phoneNumber}
                emailAddress={emailAddress}
            />
        </>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        rowGap: 4,
        paddingBottom: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    text_heading: {
        marginBottom: 4,
        fontFamily: 'Lato-Regular',
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

export default OrderDetail;
