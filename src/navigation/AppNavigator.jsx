import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// buyer screens
import BottomTab from './BottomTab';
import ChatScreen from '../chat/screens/ChatScreen';
import LoginScreen from '../auth/screens/LoginScreen';
import VerifyScreen from '../auth/screens/VerifyScreen';
import RatingScreen from '../rating/screens/RatingScreen';
import GiveRatingScreen from '../rating/screens/GiveRatingScreen';
import ExchangeRatingScreen from '../rating/screens/ExchangeRatingScreen';

// seller screens
import DashboardScreen from '../seller/dashboard/screens/DashboardScreen';
import ProductsScreen from '../seller/products/screens/ProductsScreen';
import AddNewProductScreen from '../seller/addNewProduct/screens/AddNewProductScreen';
import NotificationsScreen from '../seller/notifications/screens/NotificationsScreen';

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
                            <Stack.Screen name="Notifications" component={NotificationsScreen} />
                            <Stack.Screen name="AddNewProduct" component={AddNewProductScreen} />
                            <Stack.Screen name="Products" component={ProductsScreen} />
                            <Stack.Screen name="Dashboard" component={DashboardScreen} />

                        </>
                    ) : (
                        <>
                            <Stack.Screen name="BottomTab" component={BottomTab} />
                            <Stack.Screen name="Chat" component={ChatScreen} />
                            <Stack.Screen name="Rating" component={RatingScreen} />
                            <Stack.Screen name="GiveRating" component={GiveRatingScreen} />
                            <Stack.Screen name="ExchangeRating" component={ExchangeRatingScreen} />
                        </>
                    )}
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
