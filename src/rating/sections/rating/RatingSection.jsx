import { StyleSheet, Text, View } from 'react-native';

import StarFillPinkSvg from '../../../assets/images/star_fill_pink.svg';

import * as colors from '../../../config/colors';

const data = [
    {title: 'Outstanding', value: 8},
    {title: 'Good', value: 1},
    {title: 'Okay', value: 1},
    {title: 'Poor', value: 0},
    {title: 'Very disappointing', value: 0},
];

const RatingSection = ({item}) => {
    const rating = item?.rating || 5;
    const raters = item?.rates || 10;

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <StarFillPinkSvg />
                <Text style={styles.text}>{`${rating}/5 ${raters} Ratings`}</Text>
            </View>
            <View style={styles.ratingContainer}>
                {data.map((i, index) => (
                    <View key={index} style={styles.ratingContentContainer}>
                        <Text style={styles.title}>{i.title}</Text>
                        <Text style={styles.text_heading}>{i.value}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background_one,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
        paddingVertical: 20,
        marginBottom: 10,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#808080',
    },
    ratingContainer: {
        rowGap: 10,
        paddingBottom: 10,
        marginBottom: 20,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    ratingContentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
    text_heading: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.text_primary,
    },
});

export default RatingSection;
