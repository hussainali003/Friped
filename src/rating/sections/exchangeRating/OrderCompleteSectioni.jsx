import {StyleSheet, Text, View } from 'react-native';

import OrderCompleteTrack from '../../components/exchangeRating/OrderCompleteTrack';

import data from '../../../static/ExchangeRating';

import * as colors from '../../../config/colors';

const OrderCompleteSection = () => {
    const trackId = '123456789123';

    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Tracking ID: {trackId}</Text>
            </View>
            <View style={styles.contentContainer}>
                {data.map((item, index) => (
                    <OrderCompleteTrack
                        key={index}
                        index={index}
                        totalIndex={data.length - 1}
                        date={item.date}
                        title={item.title}
                    />
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        paddingTop: 10,
        paddingBottom: 18,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    title: {
        marginBottom: 4,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.text_primary,
    },
    contentContainer: {
        position: 'relative',
    },
});

export default OrderCompleteSection;
