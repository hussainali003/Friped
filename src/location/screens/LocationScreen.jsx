/* eslint-disable react-native/no-inline-styles */
import MapView from 'react-native-maps';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, StackHeader } from '../../common';

import SearchAltSvg from '../../assets/images/search_alt.svg';
import PinLightSvg from '../../assets/images/pin_light.svg';

import * as colors from '../../config/colors';

const LocationScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <StackHeader title="Provide your location" />
            <View style={styles.mapContainer}>
                <View style={styles.inputContainer}>
                    <SearchAltSvg />
                    <TextInput placeholder="Search for area, street name" placeholderTextColor={colors.text_dim} style={styles.input}/>
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                     />
                <View style={styles.footer}>
                    <View style={{marginBottom: 20, marginHorizontal: 16}}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 6}}>
                            <PinLightSvg />
                            <Text style={{fontSize: 20, fontFamily: 'Lato-Bold'}}>6 Rue de l'Avenir, 92360 Meudon</Text>
                        </View>
                        <Text style={{marginLeft: 30}}>Meudon</Text>
                    </View>
                    <Button title="Confirm location" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    mapContainer: {
        flex: 1,
    },
    map: {
        flex: 1,
        position: 'relative',
    },
    inputContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
        paddingHorizontal: 16,
        marginTop: 16,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#E1E1E1',
        backgroundColor: colors.white,
    },
    input: {
        flex: 1,
        backgroundColor: colors.white,
    },
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingTop: 12,
        paddingBottom: 52,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.white,
    },
});

export default LocationScreen;
