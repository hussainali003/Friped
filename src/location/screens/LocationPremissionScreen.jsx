import { StyleSheet, Text,  View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../../common';

import PersonStandingSvg from '../../assets/images/person_standing.svg';

import * as colors from '../../config/colors';

const LocationPremissionScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <View style={styles.personStandingContainer}>
                <PersonStandingSvg />
            </View>
            <Text style={styles.heading}>We don’t have your location, yet !</Text>
            <Text style={styles.text}>Set your location to begin shopping nearby.</Text>
            <Button title="Send OTP" mb={10} />
            <Button type="secondary" title="Add manually" mb={126} />
            <Text style={styles.footerText}>We only access your location while your using the app to improve your experience.</Text>
        </View>
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
        fontFamily: 'Lato-Regular',
        color: colors.text_dim,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: colors.text_dim,
    },
    text_heading: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.text_primary,
    },
});

export default LocationPremissionScreen;
