import {Text,  View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import InboxMenPng from '../../../../../assets/images_png/inbox_men.png';

import * as colors from '../../../../../config/colors';

const WalletListItem = ({item}) => {
    const name = item?.name || 'Venz';
    const image = item?.image || InboxMenPng;
    const createdAt = item?.createdAt || '7 March 2022';
    const transfer = item?.transfer || 'Transfer to BRI';

    return (
        <TouchableOpacity
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text_heading}>{transfer}</Text>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text_light}>{createdAt}</Text>

            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#EDEDED',
        columnGap: 16,
    },
    imageContainer: {
        height: 48,
        width: 48,
        borderRadius: 48 * 2,
        backgroundColor: colors.background_two,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        rowGap: 8,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lato-Light',
        color: '#151D3B',
    },
    text_light: {
        fontSize: 10,
        fontFamily: 'Lato-Light',
        color: '#151D3B',
    },
    text_heading: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        color: '#0F1828',
    },
});

export default WalletListItem;
