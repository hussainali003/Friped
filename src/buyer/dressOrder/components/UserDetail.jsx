import { Image, StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../config/colors';

const UserDetail = ({name, price, depositePrice, dressImage, size, phoneNumber, emailAddress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={[styles.text, styles.text_important]}>{name}</Text>
                <Text style={[styles.text_heading, styles.text_important]}>{`$${price + depositePrice}`}</Text>
            </View>
            <View style={[styles.contentContainer_two]}>
                <View style={styles.imageContainer}>
                    <Image source={dressImage} style={styles.image}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, styles.text_label]}>Size: <Text style={styles.text}>{size}</Text></Text>
                    <Text style={[styles.text, styles.text_label]}>Phone number: <Text style={styles.text}>{phoneNumber}</Text></Text>
                    <Text style={[styles.text, styles.text_label]}>Email address: <Text style={styles.text}>{emailAddress}</Text></Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        rowGap: 4,
        paddingBottom: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    imageContainer: {
        backgroundColor: 'red',
        width: 67,
        height: 72,
        borderRadius: 6,
    },
    contentContainer_two: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 14,
    },
    text_heading: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: colors.text_primary,
    },
    text_label: {
        marginBottom: 6,
        color: colors.text_primary,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#808080',
    },
    text_important: {
        color: colors.dashLine,
    },
});

export default UserDetail;
