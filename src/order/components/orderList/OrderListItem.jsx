/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CalenderLightSvg from '../../../assets/images/calendar_light.svg';

import * as colors from '../../../config/colors';

const OrderListItem = ({item}) => {
    const navigation = useNavigation();
    const orderId = item?.orderId || '20340005';
    const price = item?.price || 30;
    const name = item?.name || 'Mermaid wedding dress';
    const createdAt = item?.createdAt
        ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const status = item?.status || 'accepted';
    const image = item?.image || '';

    const handleNavigateToOrderDetail = () => {
        navigation.navigate('HomeTab', {screen: 'OrderDetail'});
    };

    if (status === 'collected' || status === 'delivered') {
        return (
            <TouchableOpacity onPress={handleNavigateToOrderDetail} style={[styles.container, styles.container_two]}>
                <View style={styles.container_two_textContainer}>
                    <Text style={styles.text}>{`Your Order ID:${orderId} has been ${status}`}</Text>
                </View>
                <View style={styles.container_two_imageContainer}>
                    <Image source={image} style={styles.container_two_imageContainer}/>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity onPress={handleNavigateToOrderDetail} style={styles.container}>
            <View style={styles.textContainer_one}>
                <Text style={[styles.text, styles.textContainer_one_text]}>{`Order ID : ${orderId}`}</Text>
                <Text style={[styles.text, styles.textContainer_one_text]}>{`$${price}`}</Text>
            </View>
            <View style={styles.textContainer_two}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>View Details</Text>
            </View>
            <View style={styles.textContainer_three}>
                <View>
                    <View style={styles.textContainer_three_contentContainer}>
                        <CalenderLightSvg />
                        <Text style={styles.text}>{createdAt}</Text>
                    </View>
                    <Text style={[styles.text, styles.textContainer_three_text, {color: status === 'accepted' ? '#589D00' : '#C20000'}]}>{status}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.dashLine,
        backgroundColor: colors.background_two,
    },
    container_two: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container_two_textContainer: {
        width: '80%',
    },
    container_two_imageContainer: {
        width: 57,
        height: 42,
        borderRadius: 4.7,
        backgroundColor: colors.white,
    },
    container_two_image: {
        width: '100%',
        height: '100%',
    },
    textContainer_one: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    textContainer_one_text: {
        fontSize: 16,
    },
    textContainer_two: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 8,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    textContainer_three: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textContainer_three_contentContainer: {
        flexDirection: 'row',
        columnGap: 6,
        marginBottom: 12,
    },
    textContainer_three_text: {
        textDecorationLine: 'underline',
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
});

export default OrderListItem;
