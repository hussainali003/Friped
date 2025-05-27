import { ScrollView, StyleSheet, Text,  View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../../common';

import PersonStandingSvg from '../../assets/images/person_standing.svg';

import * as colors from '../../config/colors';

const LocationPremissionScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
                <View style={styles.personStandingContainer}>
                    <PersonStandingSvg />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text_heading}>We don’t have your location, yet !</Text>
                    <Text style={styles.text}>Set your location to begin shopping nearby.</Text>
                </View>
                <Button title="Use current location" mb={10} />
                <Button type="secondary" title="Add manually" />
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.text}>We only access your location while your using the app to improve your experience.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    scrollViewContentContainer: {
        paddingTop: 30,
    },
    personStandingContainer: {
        alignItems: 'center',
        marginBottom: 69,
    },
    textContainer: {
        rowGap: 10,
        marginBottom: 30,
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
    footer: {
        marginBottom: 20,
        marginHorizontal: 16,
    },
});

export default LocationPremissionScreen;
