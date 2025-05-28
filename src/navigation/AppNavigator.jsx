import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BuyerBottomTab from './BuyerBottomTab';

import SellerBottomTab from './SellerBottomTab';

import EditProfileScreen from '../profile/screens/EditProfileScreen';
import LocationPremissionScreen from '../location/screens/LocationPremissionScreen';

import ChatScreen from '../chat/screens/ChatScreen';
import RatingScreen from '../rating/screens/RatingScreen';
import GiveRatingScreen from '../rating/screens/GiveRatingScreen';
import ExchangeRatingScreen from '../rating/screens/ExchangeRatingScreen';
import NotificationsScreen from '../notifications/screens/NotificationsScreen';
import AuthScreen from '../auth/screens/AuthScreen';
import { useEffect, useState } from 'react';
import { getAuth } from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [initializing, setInitializing] = useState(true);
    const isSeller = true;

    useEffect(() => {
        getAuth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setInitializing(false);
        });
    }, []);

  useEffect(() => {
    if (!initializing) {
        BootSplash.hide().catch(() => {});
    }

  },[initializing]);

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade'}}>
            {isLoggedIn ? (
                <>
                    {isSeller ? (
                        <>
                            <Stack.Screen name="SellerBottomTab" component={SellerBottomTab} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="BottomTab" component={BuyerBottomTab} />
                        </>
                    )}
                    <Stack.Screen name="Notifications" component={NotificationsScreen} />
                    <Stack.Screen name="Chat" component={ChatScreen} />
                    <Stack.Screen name="Rating" component={RatingScreen} />
                    <Stack.Screen name="GiveRating" component={GiveRatingScreen} />
                    <Stack.Screen name="ExchangeRating" component={ExchangeRatingScreen} />
                    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                    <Stack.Screen name="LocationPremission" component={LocationPremissionScreen} />
                </>
            ) : (
                <Stack.Screen name="Auth" component={AuthScreen} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigator;
