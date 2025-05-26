import { Image, StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../config/colors';

const TransferProfileInfo = ({item}) => {
    const image = item?.image || '';
    const name = item?.name || 'Venz';
    const lastOnline = item?.lastOnline || 'Last seen yesterday';

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={image} />
                </View>
                <View>
                    <Text style={styles.text_heading}>{name}</Text>
                    <Text style={[styles.text, styles.text_regular]}>{lastOnline}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.text}>Wallet balance</Text>
                <Text style={styles.text}>$100.00</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 33,
    },
    leftButton: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16,
    },
    imageContainer: {
        height: 48,
        width: 48,
        overflow: 'hidden',
        borderWidth: 3,
        borderRadius: 48 * 2,
        borderColor: colors.white,
        backgroundColor: colors.background_two,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 2,
        marginLeft: 'auto',
        paddingRight: 12,
    },
    rightButton: {
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        color: colors.white,
    },
    text_regular: {
        fontFamily: 'Lato-Regular',
    },
    text_heading: {
        marginBottom: 4,
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.white,
    },
});

export default TransferProfileInfo;
