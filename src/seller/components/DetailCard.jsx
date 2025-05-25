import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import DashboardBackgroundCardPng from '../../assets/images_png/dashboard_background_card.png';

import * as colors from '../../config/colors';

const DetailCard = ({title, rating, right, style, contentContainerStyle, titleStyle, textStyle}) => {
    return (
        <ImageBackground source={DashboardBackgroundCardPng} style={[styles.container, style]}>
            <View style={[styles.contentContainer, contentContainerStyle]}>
               <Text style={[styles.title, titleStyle]}>{title}</Text>
               <Text style={[styles.text, textStyle]}>{rating}</Text>
            </View>
            {right && (
                right
            )}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        overflow: 'hidden',
    },
    contentContainer: {
        rowGap: 4,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#E1E1E1',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.white,
    },
});

export default DetailCard;
