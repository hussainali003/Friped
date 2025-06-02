import {StyleSheet} from 'react-native';
import { useRef, useState } from 'react';
import MapView,  { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import auth from '@react-native-firebase/auth';
import firestore, { getFirestore, doc, setDoc, getDoc } from '@react-native-firebase/firestore';

import { Button, StackHeader, Text, View } from '../../common';

import PinLightSvg from '../../assets/images/pin_light.svg';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCfP1hTT3Q6Pz0uu-kjmZs4y33FVnfyymc';

import * as colors from '../../config/colors';
import reverseGeocode from '../../util/reverseGeocode';

const LocationScreen = () => {
    const insets = useSafeAreaInsets();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const mapRef = useRef(null);
    const [marker, setMarker] = useState(null);

    const [location, setLocation] = useState(null);
    const [isLocationSelect, setIsLocationSelect ] = useState(false);

    const handleKeyPress = ({ nativeEvent }) => {
        if (nativeEvent.key === 'Backspace') {
            setIsLocationSelect(false);
        }
    };

    const handleConfirm = async () => {
        if (!location || !marker) {return;}

        setIsLoading(true);

        const user = auth().currentUser;

        if (!user) {
            setIsLoading(false);
            return;
        }

        const userRef = doc(getFirestore(), 'users', user.uid);

        try {
            const userSnap = await getDoc(userRef);

            const locationData = {
                location: {
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                    updatedAt: firestore.FieldValue.serverTimestamp(),
                },
                isProfileComplete: true,
            };

            if (userSnap.exists()) {
            // Document exists, update it
            await setDoc(userRef, locationData, { merge: true });
            } else {
            // Document doesn't exist, create it
            await setDoc(userRef, locationData);
            }

            setIsLocationSelect(false);
            setMarker(null);
            setLocation(null);
        } catch (err) {
            setErrorMessage(err.message);
        }

        setIsLoading(false);
    };

    return (
        <View flex={1} backgroundColor={colors.background_two} style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <StackHeader title="Provide your location" />
            <View flex={1}>
                <GooglePlacesAutocomplete
                    placeholder="Search for a Location"
                    textInputProps={{
                        onKeyPress: (e) => handleKeyPress(e),
                        placeholderTextColor: '#000',
                    }}
                    styles={{ textInput: { fontSize: 16, marginBottom: 12}, listView: {borderRadius: 6}, container: {width: '100%', position: 'absolute', top: 15, paddingHorizontal: 16, zIndex: 5}}}
                    onPress={(data, details = null) => {
                        const { lat, lng } = details.geometry.location;

                        setMarker({
                            latitude: lat,
                            longitude: lng,
                        });


                        mapRef.current.animateToRegion({
                            latitude: lat,
                            longitude: lng,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        });

                        setIsLocationSelect(true);
                    }}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}

                    enablePoweredByContainer={false}
                    predefinedPlaces={[]}
                    autoFillOnNotFound={false}
                    currentLocation={false}
                    currentLocationLabel="Current location"
                    debounce={0}
                    disableScroll={false}
                    enableHighAccuracyLocation={true}
                    fetchDetails={true}
                    filterReverseGeocodingByTypes={[]}
                    GooglePlacesDetailsQuery={{}}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance',
                        type: 'restaurant',
                    }}
                    GoogleReverseGeocodingQuery={{}}
                    isRowScrollable={true}
                    keyboardShouldPersistTaps="always"
                    listHoverColor="#ececec"
                    listUnderlayColor="#c8c7cc"
                    listViewDisplayed="auto"
                    keepResultsAfterBlur={false}
                    minLength={0}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    numberOfLines={1}
                    onFail={(error) => setErrorMessage( `Google Place Failed : ${error.message}` )}
                    onNotFound={() => {}}
                    onTimeout={() => setErrorMessage('google places autocomplete: request timeout')}
                    predefinedPlacesAlwaysVisible={false}
                    suppressDefaultStyles={false}
                    textInputHide={false}
                    timeout={20000}
                    isNewPlacesAPI={false}
                    fields="*"
                />
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onPress={async (e) => {
                        const { latitude, longitude } = e.nativeEvent.coordinate;

                        setMarker({ latitude, longitude });

                        const locationInfo = await reverseGeocode(latitude, longitude);

                        if (locationInfo) {
                            setLocation(locationInfo);
                            setIsLocationSelect(true);
                        }
                    }}
                >
                    {marker && <Marker coordinate={marker} />}
                </MapView>
                {isLocationSelect && (
                    <View w={'100%'} position="absolute"bottom={0} rowGap={20} pt={12} pb={20} ph={16} backgroundColor={colors.white} style={styles.footer}>
                        <View>
                            <View flexDirection="row" alignItems="center" columnGap={6} mh={16}>
                                <PinLightSvg />
                                <Text size={20} fontFamily="bold">{location.city}</Text>
                            </View>
                            <Text size={14} ml={47}>{location.country}</Text>
                        </View>
                        {errorMessage && <Text size={14} mb={15} color={colors.text_error}>{errorMessage}</Text>}
                        <Button loading={isLoading} onPress={handleConfirm} title="Confirm location" />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    input: {
        flex: 1,
        backgroundColor: colors.white,
    },
    footer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.white,
    },
});

export default LocationScreen;
