import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../common';

import * as colors from '../../../config/colors';

const PriceDetailSection = ({item, setIsModalVisiable}) => {
    const days = item?.days || 2;
    const deposite = item?.deposite || 20;
    const dailyRent = item?.dailyRent || 30;

    const handleModalOpen = () => {
        setIsModalVisiable(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>Pay on delivery option</Text>
            </View>
            <View style={styles.contentContainer} >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Total day for rent</Text>
                    <Text style={styles.text}>{`${days} days`}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Security deposits</Text>
                    <Text style={styles.text}>{`$${deposite}`}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Daily rental price</Text>
                    <Text style={styles.text}>{`$${dailyRent}`}</Text>
                </View>
                <View style={[styles.textContainer, styles.headingTextContainer]}>
                    <Text style={styles.heading}>Total rental price</Text>
                    <Text style={styles.heading}>{`$${dailyRent + deposite}`}</Text>
                </View>
            </View>
            <Button onPress={handleModalOpen} title="Pay now" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 18,
        marginBottom: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
        backgroundColor: colors.background_two,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        color: colors.text_primary,
    },
    contentContainer: {
        rowGap: 12,
        paddingHorizontal: 16,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headingTextContainer: {
        paddingVertical: 10,
        marginBottom: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
    heading: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: '#30313D',
    },
});

export default PriceDetailSection;
