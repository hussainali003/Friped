import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as colors from '../../../config/colors';

const SellerSection = ({name = 'Priya'}) => {

    return (
        <View style={styles.container}>
            <View style={styles.sellerProfileImageContainer}>
                <Image source="" style={styles.sellerProfileImage}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.textContainer_one]}>{`${name} from Connaught Place Delhi`}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={[styles.text, styles.buttonText]}>View Review</Text>
                <View style={styles.buttonTextBorder}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 12,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#B0B0B0',
    },
    sellerProfileImageContainer: {
        width: 36,
        height: 36,
        marginLeft: 8,
        marginRight: 6,
        borderRadius: 36 * 2,
        backgroundColor: colors.background_two,
    },
    textContainer_one: {
        color: '#666666',
    },
    button: {
        height: 36,
        justifyContent: 'center',
        paddingLeft: 8,
        marginLeft: 'auto',
    },
    buttonText: {
       color: '#2C3E50',
    },
    buttonTextBorder: {
        height: 1,
        backgroundColor: '#2C3E50',
        marginTop: 1,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
    },
});

export default SellerSection;
