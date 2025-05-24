import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../common';

import RatingSubmitSvg from '../../assets/images/rating_submit.svg';

import * as colors from '../../config/colors';

const RatingSubmittedPage = () => {
    const navigation = useNavigation();

    const handleNavigateToHome = () => {
        navigation.navigate('BottomTab', {screen: 'Home'});
    };

    return (
        <View style={styles.container}>
            <RatingSubmitSvg />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Rating Submitted ! Once approved by our team, we’ll publish it.</Text>
            </View>
            <Button onPress={handleNavigateToHome} title="Continue" style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
        marginTop: 40,
    },
    title: {
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
    button: {
        width: '100%',
        marginTop: 30,
        marginHorizontal: 0,
    },
});

export default RatingSubmittedPage;
