import { useNavigation } from '@react-navigation/native';
import {Text,  View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import InboxMenPng from '../../../../assets/images_png/inbox_men.png';

import * as colors from '../../../../config/colors';

const FeedBackListItem = ({item, index, totalIndex}) => {
    const navigation = useNavigation();
    const name = item?.name || 'Venz';
    const image = item?.image || InboxMenPng;
    const description = item?.description || 'Worth the price...rented it for $29.. satisfied with the product.. has plastic backside which makes its friendly for dishwashing ... overall good!';

    const removeBorderAndPadding  = {
        borderBottomWidth: 0,
        paddingBottom: 0,
    };

    const handleNavigateToExchangeRating = () => {
        navigation.navigate('ExchangeRating');
    };

    return (
        <TouchableOpacity
            onPress={handleNavigateToExchangeRating}
            style={[styles.container, index === totalIndex && removeBorderAndPadding]}
        >
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text_heading}>{name}</Text>
                <Text style={styles.text}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16,
        paddingBottom: 20,
        borderBottomWidth: 1,
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
    },
    text: {
        lineHeight: 20,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#ADB5BD',
    },
    text_heading: {
        marginBottom: 4,
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: '##0F1828',
    },
});

export default FeedBackListItem;
