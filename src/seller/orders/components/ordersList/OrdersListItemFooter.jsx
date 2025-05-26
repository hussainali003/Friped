import { Image, StyleSheet, Text, View } from 'react-native';

import TruckSvg from '../../../../assets/images/truck.svg';
import CardGreySvg from '../../../../assets/images/card_grey.svg';
import CalenderLightSvg from '../../../../assets/images/calendar_light.svg';

import WeddingMermaidMediumPng from '../../../../assets/images_png/wedding_mermaid_medium.png';

import * as colors from '../../../../config/colors';

const OrdersListItemFooter = ({item}) => {
    const createdAt = item?.createdAt
        ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const image = item?.image || WeddingMermaidMediumPng;
    const paymentStatus = item?.paymentStatus || 'paid';
    const deliveryStatus = item?.deliveryStatus || 'delivery';

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.contentContainer}>
                    <CalenderLightSvg />
                    <Text style={styles.text}>{createdAt}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <CardGreySvg />
                    <Text style={styles.text}>{'Payment status - '}
                        <Text style={[styles.text, styles.text_green]}>{paymentStatus}</Text>
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <TruckSvg />
                    <Text style={styles.text}>{'Delivery Status - '}
                        <Text style={[styles.text, styles.text_red]}>{deliveryStatus}</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
        flexDirection: 'row',
        columnGap: 6,
        marginBottom: 12,
    },
    imageContainer: {
        width: 95,
        height: 70,
        borderRadius: 4.7,
        backgroundColor: colors.white,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        lineHeight: 21,
        textTransform: 'capitalize',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
    text_green: {
        color: '#589D00',
    },
    text_red: {
        color: '#C20000',
    },
});

export default OrdersListItemFooter;
