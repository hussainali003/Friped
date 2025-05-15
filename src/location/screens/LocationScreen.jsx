/* eslint-disable react-native/no-inline-styles */
import {   StyleSheet, Text,  View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import images from assets
import PersonStandingSvg from '../../assets/images/person_standing.svg';

// import colors from config
import * as colors from '../../config/colors';

// import components from common
import { Button } from '../../common';

const LocationScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.personStandingContainer}>
                <PersonStandingSvg />
            </View>
            <Text style={{marginBottom: 10,textAlign: 'center',fontFamily: 'Lato-Bold',fontSize: 20}}>We don’t have your location, yet !</Text>
            <Text style={{marginBottom: 36, textAlign: 'center', fontFamily: 'Lato-Regular', fontSize: 14, color: colors.text_dim}}>Set your location to begin shopping nearby.</Text>
            <Button title="Send OTP" mb={10} />
            <Button type="secondary" title="Add manually" mb={126} />
            <Text style={styles.footerText}>We only access your location while your using the app to improve your experience.</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    personStandingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 69,
    },
    footerText: {
        marginHorizontal: 16,
        marginBottom: 34,
        textAlign: 'center',
        fontFamily: 'Lato-Light',
        color: colors.text_dim,
    },
});

export default LocationScreen;
