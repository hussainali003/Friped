import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './BottomTab';

import LoginScreen from '../auth/screens/LoginScreen';
import VerifyScreen from '../auth/screens/VerifyScreen';
import LocationScreen from '../location/screens/LocationScreen';
import EditProfileScreen from '../profile/screens/EditProfileScreen';
import LocationProvideScreen from '../location/screens/LocationProvideScreen';

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
                    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                    <Stack.Screen name="LocationProvide" component={LocationProvideScreen} />
                    <Stack.Screen name="Location" component={LocationScreen} />
                </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigator;
