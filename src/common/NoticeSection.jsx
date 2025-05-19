import { StyleSheet, Text, View } from 'react-native';

import TimeLimitSvg from '../assets/images/time_limit.svg';

import * as colors from '../config/colors';

const NoitceSection = ({style}) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.noticeTextContainer}>
                <Text style={styles.noticeTextContainerText_one}>4-Hour Turnaround</Text>
                <Text style={styles.noticeTextContainerText_two}>Your dress availability was confirmed in just four hours.</Text>
            </View>
            <TimeLimitSvg />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 50,
        marginTop: 30,
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: colors.secondary,
    },
    noticeTextContainer: {
        flex: 1,
        rowGap: 10,
    },
    noticeTextContainerText_one: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: colors.white,
    },
    noticeTextContainerText_two: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#DCDCDC',
    },
});

export default NoitceSection;
