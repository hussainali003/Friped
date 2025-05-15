import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../auth/screens/LoginScreen';
import VerifyScreen from '../auth/screens/VerifyScreen';
import LocationScreen from '../location/screens/LocationScreen';
import LocationProvideScreen from '../location/screens/LocationProvideScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="LocationProvide" component={LocationProvideScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
