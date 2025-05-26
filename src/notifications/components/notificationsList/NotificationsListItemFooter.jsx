import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CalenderLightSvg from '../../../assets/images/calendar_light.svg';

import WeddingMermaidMediumPng from '../../../assets/images_png/wedding_mermaid_medium.png';

import * as colors from '../../../config/colors';

const NotificationsListItemFooter = ({item}) => {
    const createdAt = item?.createdAt
        ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const image = item?.image || WeddingMermaidMediumPng;

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.contentContainer}>
                    <CalenderLightSvg />
                    <Text style={styles.text}>{createdAt}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Text style={styles.text_green}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text_red}>Reject</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contentContainer: {
        flexDirection: 'row',
        columnGap: 6,
        marginBottom: 12,
    },
    imageContainer: {
        width: 95,
        height: 70,
        borderRadius: 4.7,
        backgroundColor: colors.white,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        lineHeight: 21,
        textTransform: 'capitalize',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
    text_green: {
        textDecorationLine: 'underline',
        color: '#589D00',
    },
    text_red: {
        textDecorationLine: 'underline',
        color: '#C20000',
    },
});

export default NotificationsListItemFooter;
