import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../common';

import * as colors from '../../../config/colors';

const FooterSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Still stuck? Help us a mail away</Text>
            <Button title="Send a message" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderColor: '#E1E1E1',
        paddingTop: 16,
    },
    text: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
});

export default FooterSection;
