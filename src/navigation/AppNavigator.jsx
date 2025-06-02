import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getAuth } from '@react-native-firebase/auth';
import { doc, getFirestore, onSnapshot } from '@react-native-firebase/firestore';

import { clearUser, setUser } from '../redux/userSlice';

import AuthScreen from '../auth/screens/AuthScreen';

import BuyerBottomTab from './BuyerBottomTab';

import SellerBottomTab from './SellerBottomTab';

import LocationScreen from '../location/screens/LocationScreen';
import EditProfileScreen from '../profile/screens/EditProfileScreen';
import LocationPremissionScreen from '../location/screens/LocationPremissionScreen';

import ChatScreen from '../chat/screens/ChatScreen';
import FaqScreen from '../setting/screens/FaqScreen';
import RatingScreen from '../rating/screens/RatingScreen';
import SettingScreen from '../setting/screens/SettingScreen';
import GiveRatingScreen from '../rating/screens/GiveRatingScreen';
import RulesAndTermsScreen from '../setting/screens/RulesAndTermsScreen';
import ExchangeRatingScreen from '../rating/screens/ExchangeRatingScreen';
import TransactionScreen from '../transactions/screens/TransactionsScreen';
import LocationOptionsScreen from '../location/screens/LocationOptionsScreen';
import NotificationsScreen from '../notifications/screens/NotificationsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const dispatch = useDispatch();
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
                        dispatch(setUser({role: data.role}));
                    } else {
                        dispatch(clearUser());
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
    if (!initializing) {
        BootSplash.hide().catch(() => {});
    }

    },[initializing]);

    return (
      <NavigationContainer key={isProfileComplete ? 'complete' : 'incomplete'}>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade'}}>
            {isLoggedIn ? (
                isProfileComplete ? (
                    <>
                        {role === 'Both' && <Stack.Screen name="BottomTab" component={BuyerBottomTab} />}
                        {role === 'Seller' && <Stack.Screen name="SellerBottomTab" component={SellerBottomTab} />}
                        <Stack.Screen name="Chat" component={ChatScreen} />
                        <Stack.Screen name="Faq" component={FaqScreen} />
                        <Stack.Screen name="Rating" component={RatingScreen} />
                        <Stack.Screen name="Setting" component={SettingScreen} />
                        <Stack.Screen name="GiveRating" component={GiveRatingScreen} />
                        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                        <Stack.Screen name="Transactions" component={TransactionScreen} />
                        <Stack.Screen name="Notifications" component={NotificationsScreen} />
                        <Stack.Screen name="RulesAndTerms" component={RulesAndTermsScreen} />
                        <Stack.Screen name="ExchangeRating" component={ExchangeRatingScreen} />
                        <Stack.Screen name="LocationOptions" component={LocationOptionsScreen} />
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
