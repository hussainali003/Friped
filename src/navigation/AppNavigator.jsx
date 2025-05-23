import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './BottomTab';

import LoginScreen from '../auth/screens/LoginScreen';
import VerifyScreen from '../auth/screens/VerifyScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const isLogin = true;

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade'}}>
            {isLogin ? (
                <>
                    <Stack.Screen name="BottomTab" component={BottomTab} />
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
