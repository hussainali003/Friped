import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import OrderDetail from '../components/OrderDetail';

import ArrowRightLightSvg from '../../assets/images/arrow_right_light.svg';

import * as colors from '../../config/colors';

const HomePage = ({selectedPage, setSelectedPage}) => {

    const handleChangePage = () => {
        setSelectedPage(selectedPage + 1);
    };

    return (
        <>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Share your experience of renting a dress from Ms. William with everyone.</Text>
                </View>
                <OrderDetail />
                <Text style={styles.text}>He won't be able to view your rating until he has provided his own. He still has 10 days to do so.</Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleChangePage} style={styles.button}>
                        <ArrowRightLightSvg />
                    </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: colors.background_one,
    },
    scrollViewContentContainer: {
        paddingVertical: 20,
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
    buttonContainer: {
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: colors.white,
    },
    button: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'auto',
        borderRadius: 44 * 2,
        backgroundColor: colors.secondary,
    },
    text: {
        lineHeight: 20,
        color: '#ADB5BD',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
});

export default HomePage;
