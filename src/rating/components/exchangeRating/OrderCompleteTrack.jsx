import {StyleSheet, Text, View } from 'react-native';

import CheckMarkSvg from '../../../assets/images/check_mark.svg';

import * as colors from '../../../config/colors';

const OrderCompleteTrack = ({
        index,
        totalIndex,
        date = 'September 26, 2023• 12:12',
        title = 'Schedule for pick-up',
        style,
        lineStyle,
        textContainerStyle,
        textStyle,
        text_headingStyle,
}) => {

    const applyStyle = () => {

        if (index === 0) {
            return {
                height: 30,
                bottom: 0,
            };
        }

        if (index ===  totalIndex) {
            return {
                height: 30,
                top: 0,
            };
        }

        return style;
    };

    return (
        <View style={[styles.container, style]}>
            <View style={[styles.line, lineStyle, applyStyle()]} />
            <CheckMarkSvg />
            <View style={[textContainerStyle]}>
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
        columnGap: 12,
    },
    line: {
        position: 'absolute',
        left: 10,
        height: '100%',
        borderWidth: 1,
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

export default OrderCompleteTrack;
