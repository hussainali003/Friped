import { useState } from 'react';
import { getAuth } from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import VerifyScreen from './VerifyScreen';

import { AuthContext } from '../../config/context';

const Stack = createNativeStackNavigator();

const AuthScreen = () => {
    const [confimation, setConfimation] = useState(null);

    const sendCode = async (phoneNumber) => {
        const _confirmation = await getAuth().signInWithPhoneNumber(phoneNumber);
        setConfimation(_confirmation);
    };

    const verifyCode = async (code) => {
        await confimation?.confirm(code);
    };

    return (
        <AuthContext.Provider value={{ sendCode, verifyCode }}>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Verify" component={VerifyScreen} />
            </Stack.Navigator>
        </AuthContext.Provider>
    );
};

export default AuthScreen;
