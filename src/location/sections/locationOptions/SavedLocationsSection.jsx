import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../config/colors';
import LocationSavedItem from '../../components/locationOptions/LocationSavedItem';

const savedLocations = [
    {
        title: 'Home',
        address: '3rd floor T1 SGS dreamland appartment metropolian area Delhi',
    },
];

const SavedLocationsSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text>Pay on delivery option</Text>
            </View>
            <View style={styles.savedLocationsContainer}>
                {savedLocations.map(item => (
                    <LocationSavedItem title={item.title} address={item.address} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 18,
        marginBottom: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
        backgroundColor: colors.background_two,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Lato-Medium',
        color: colors.text_primary,
    },
    savedLocationsContainer: {
        marginHorizontal: 16,
        rowGap: 15,
    },
});

export default SavedLocationsSection;
