import { StyleSheet, Text, View } from 'react-native';

import MondiaSvg from '../../../../assets/images/mondia.svg';

import * as colors from '../../../../config/colors';

const DeliveryPartnerSection = () => {
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.text_heading}>Delivery Partner</Text>
                <Text style={styles.text}>mondial relay</Text>
                <Text style={styles.text}>Delivery number 123456789123</Text>
            </View>
            <MondiaSvg />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        rowGap: 4,
        paddingBottom: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    text: {
        textTransform: 'capitalize',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#808080',
    },
    text_heading: {
        marginBottom: 4,
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.text_primary,
    },
});

export default DeliveryPartnerSection;
