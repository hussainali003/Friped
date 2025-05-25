import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../../config/colors';

const DashboardListEmpty = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No products to show</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default DashboardListEmpty;
