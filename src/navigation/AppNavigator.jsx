import { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getAuth } from '@react-native-firebase/auth';
import { doc, getFirestore, onSnapshot } from '@react-native-firebase/firestore';

import BuyerBottomTab from './BuyerBottomTab';

import SellerBottomTab from './SellerBottomTab';

import LocationScreen from '../location/screens/LocationScreen';
import EditProfileScreen from '../profile/screens/EditProfileScreen';
import LocationPremissionScreen from '../location/screens/LocationPremissionScreen';

import AuthScreen from '../auth/screens/AuthScreen';
import ChatScreen from '../chat/screens/ChatScreen';
import RatingScreen from '../rating/screens/RatingScreen';
import GiveRatingScreen from '../rating/screens/GiveRatingScreen';
import ExchangeRatingScreen from '../rating/screens/ExchangeRatingScreen';
import NotificationsScreen from '../notifications/screens/NotificationsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const [role, setRole] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [initializing, setInitializing] = useState(true);
    const [isProfileComplete, setIsProfileComplete] = useState(false);

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged(async (user) => {
            if (user) {
                setIsLoggedIn(true);

                const userDocRef = doc(getFirestore(), 'users', user.uid);

                const unsubscribeUserDoc = onSnapshot(userDocRef, (userDoc) => {
                    if (userDoc.exists()) {
                        const data = userDoc.data();
                        setRole(data?.role);
                        setIsProfileComplete(data?.isProfileComplete ?? false);
                    } else {
                        setIsProfileComplete(false);
                    }
                });

                setInitializing(false);

                return () => unsubscribeUserDoc();

            } else {
                setIsLoggedIn(false);
            }
            setInitializing(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
    if (!initializing) {
        BootSplash.hide().catch(() => {});
    }

    },[initializing]);

    console.log(role);

    return (
      <NavigationContainer key={isProfileComplete ? 'complete' : 'incomplete'}>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade'}}>
            {isLoggedIn ? (
                isProfileComplete ? (
                    <>
                        {role === 'Both' && <Stack.Screen name="BottomTab" component={BuyerBottomTab} />}
                        {role === 'Seller' && <Stack.Screen name="SellerBottomTab" component={SellerBottomTab} />}
                        <Stack.Screen name="Chat" component={ChatScreen} />
                        <Stack.Screen name="Rating" component={RatingScreen} />
                        <Stack.Screen name="GiveRating" component={GiveRatingScreen} />
                        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                        <Stack.Screen name="Notifications" component={NotificationsScreen} />
                        <Stack.Screen name="ExchangeRating" component={ExchangeRatingScreen} />
                        <Stack.Screen name="LocationPremission" component={LocationPremissionScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="LocationPremission" component={LocationPremissionScreen} />
                        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                        <Stack.Screen name="Location" component={LocationScreen} />
                    </>
                )
            ) : (
                <Stack.Screen name="Auth" component={AuthScreen} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigator;
