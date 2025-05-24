import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './BottomTab';

import ChatScreen from '../chat/screens/ChatScreen';
import LoginScreen from '../auth/screens/LoginScreen';
import VerifyScreen from '../auth/screens/VerifyScreen';
import RatingScreen from '../rating/screens/RatingScreen';
import GiveRatingScreen from '../rating/screens/GiveRatingScreen';
import ExchangeRatingScreen from '../rating/screens/ExchangeRatingScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const isLogin = true;

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade'}}>
            {isLogin ? (
                <>
                    <Stack.Screen name="BottomTab" component={BottomTab} />
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
