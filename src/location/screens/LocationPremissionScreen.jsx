import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PermissionsAndroid, Platform, ScrollView, StyleSheet } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Button, Text,  View  } from '../../common';

import PersonStandingSvg from '../../assets/images/person_standing.svg';

import * as colors from '../../config/colors';

const LocationPremissionScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'This app needs access to your location.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
    };

    const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => reject(error),
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        });
    };

    const handleGetCurrentLocation = async () => {
        setIsLoading(true);

        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
            setErrorMessage('Permission denied', 'Cannot access location.');
            setIsLoading(false);

            return;
        }

        try {
            const currentUser = auth().currentUser;

            if (!currentUser) {
                return;
            }

            const location = await getCurrentLocation();

            const userRef = firestore().collection('users').doc(currentUser.uid);

            await userRef.set({
                location: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    updatedAt: firestore.FieldValue.serverTimestamp(),
                },
                isProfileComplete: true,
            }, { merge: true });

            setIsLoading(false);
        } catch (err) {
            setErrorMessage(err.message);
        }

        setIsLoading(false);
    };

    const handleNavigateToLocation = () => {
        navigation.navigate('Location');
    };

    return (
        <View flex={1} backgroundColor={colors.background_two} style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <ScrollView contentContainerStyle={styles.ScrollViewContentContainer}>
                <View alignItems="center" mb={70}>
                    <PersonStandingSvg />
                </View>
                <View rowGap={10} mb={30}>
                    <Text size={20} fontFamily="bold" textAlign="center">We don’t have your location, yet !</Text>
                    <Text size={14} textAlign="center" color={colors.text_dim}>Set your location to begin shopping nearby.</Text>
                </View>
                <Button loading={isLoading} onPress={handleGetCurrentLocation} title="Use current location" mb={10} />
                {errorMessage && <Text size={14} mb={10} color={colors.text_error}>{errorMessage}</Text>}
                <Button onPress={handleNavigateToLocation} type="secondary" title="Add manually" />
            </ScrollView>
            <View mb={20} mh={16}>
                <Text size={14} textAlign="center" color={colors.text_dim}>We only access your location while your using the app to improve your experience.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ScrollViewContentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
});

export default LocationPremissionScreen;
