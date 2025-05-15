// import from node_modules
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens from src
import LoginScreen from './auth/screens/LoginScreen';
import VerifyScreen from './auth/screens/VerifyScreen';
import ProfileScreen from './profile/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    const bootSplashRenderer = async () => {
      await BootSplash.hide({fade: true});
    };

    bootSplashRenderer();
  },[]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Verify" component={VerifyScreen} />
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
