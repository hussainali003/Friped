import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ChevronRightSvg from '../../assets/images/chevron_right.svg';

import * as colors from '../../config/colors';

const data = ['Out standing', 'Good', 'Okay', 'Poor', 'Very disappointing'];

const RatingChoicePage = ({selectedPage, setSelectedPage}) => {

    const handleChangePage = () => {
        setSelectedPage(selectedPage + 1);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Share your experience of renting a dress from Ms. William with everyone.</Text>
            </View>
            {data.map((item, index) => (
                <TouchableOpacity key={index} onPress={handleChangePage} style={styles.buttonContainer}>
                    <Text style={styles.text}>{item}</Text>
                    <ChevronRightSvg />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: colors.background_one,
    },
    scrollViewContentContainer: {
        paddingHorizontal: 16,
        rowGap: 15,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
        marginBottom: 16,
    },
    title: {
        lineHeight: 30,
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    text: {
        lineHeight: 20,
        color: '#808080',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
});

export default RatingChoicePage;
