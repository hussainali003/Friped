/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View } from 'react-native';

import OrderTrackDetail from '../../components/orderTrack/OrderTrackDetail';

import data from '../../../static/OrderTrack';

import * as colors from '../../../config/colors';

const OrderTrackSection = () => {
    const trackId = '123456789123';

    const applyStyle = (index, complete) => {
        const style = {};

        if (complete === true) {
            style.borderStyle = 'solid';
        }

        if (complete === false) {
            style.opacity = 0.5;
        }

        if (index === 0) {
            style.height = 30;
            style.bottom = 0;
            return style;
        }

        if (index === data.length - 1) {
            style.height = 30;
            style.top = 0;
            return style;
        }

        return style;
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text_title}>Tracking ID: {trackId}</Text>
            </View>
            <View style={{position: 'relative'}}>
                {data.map((item, index) => (
                    <OrderTrackDetail
                        key={index}
                        date={item.date}
                        title={item.title}
                        complete={item.complete}
                        lineStyle={applyStyle(index, item.complete)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginBottom: 40,
    },
    textContainer: {
        paddingTop: 10,
        paddingBottom: 18,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    text_title: {
        marginBottom: 4,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.text_primary,
    },
});

export default OrderTrackSection;
