import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BuyerBottomTab from './BuyerBottomTab';

import SellerBottomTab from './SellerBottomTab';

import LoginScreen from '../auth/screens/LoginScreen';
import VerifyScreen from '../auth/screens/VerifyScreen';

import ChatScreen from '../chat/screens/ChatScreen';
import RatingScreen from '../rating/screens/RatingScreen';
import GiveRatingScreen from '../rating/screens/GiveRatingScreen';
import ExchangeRatingScreen from '../rating/screens/ExchangeRatingScreen';
import NotificationsScreen from '../notifications/screens/NotificationsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const isLogin = true;
    const isSeller = true;

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade'}}>
            {isLogin ? (
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
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Verify" component={VerifyScreen} />
                </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigator;
