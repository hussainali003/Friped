/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View } from 'react-native';

import CheckMarkSvg from '../../../assets/images/check_mark.svg';
import CheckMarkLightSvg from '../../../assets/images/check_mark_light.svg';

import * as colors from '../../../config/colors';

const OrderTrackDetail = ({
        date = 'September 26, 2023• 12:12',
        title = 'Schedule for pick-up',
        complete,
        style,
        lineStyle,
        textContainerStyle,
        textStyle,
        text_headingStyle,
}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={[styles.line, lineStyle]} />
            {complete ? <CheckMarkSvg /> : <CheckMarkLightSvg />}
            <View style={[{marginLeft: 16}, textContainerStyle]}>
                <Text style={[styles.text, textStyle]}>{date}</Text>
                <Text style={[styles.text_heading, text_headingStyle]}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        position: 'absolute',
        left: 10,
        height: '100%',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: colors.dashLine,
    },
    text_heading: {
        textTransform: 'capitalize',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        color: '#808080',
    },
});

export default OrderTrackDetail;
