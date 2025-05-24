import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../common';

import * as colors from '../../config/colors';
import OrderDetail from '../components/OrderDetail';

const SubmitRatingPage = ({selectedPage, setSelectedPage}) => {

    const handleChangePage = () => {
        setSelectedPage(selectedPage + 1);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Are you Happy with your rating?</Text>
            </View>
            <OrderDetail />
            <View style={styles.textContainer}>
                <Text style={styles.text_heading}>Outstanding</Text>
                <Text style={styles.text}>Worth the price...rented it for $29.. satisfied with the product.. has plastic backside which makes its friendly for dishwashing ... overall good!</Text>
            </View>
            <Text style={styles.text}>He won't be able to view your rating until he has provided his own. He still has 10 days to do so.</Text>
            <Button onPress={handleChangePage} title="Submit Rating" style={styles.button} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: colors.background_one,
    },
    scrollViewContentContainer: {
        paddingHorizontal: 16,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    title: {
        lineHeight: 30,
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
    textContainer: {
        rowGap: 10,
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
    },
    button: {
        marginTop: 30,
        marginHorizontal: 0,
    },
    text: {
        lineHeight: 20,
        color: '#ADB5BD',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
    text_heading: {
        fontSize: 16,
        color: colors.text_primary,
        fontFamily: 'Lato-Regular',
    },
});

export default SubmitRatingPage;
