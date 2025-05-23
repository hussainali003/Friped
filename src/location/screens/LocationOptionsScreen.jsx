import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../common';

import OptionsSection from '../sections/locationOptions/OptionsSection';
import SavedLocationsSection from '../sections/locationOptions/SavedLocationsSection';

import * as colors from '../../config/colors';

const LocationOptionsScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Select a location" />
            <ScrollView style={styles.scrollViewContainer}>
                <OptionsSection />
                <SavedLocationsSection />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    scrollViewContainer: {
        backgroundColor: colors.background_one,
    },
});

export default LocationOptionsScreen;
