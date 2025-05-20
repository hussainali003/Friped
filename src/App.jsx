// import from node_modules
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import appNavigator from navigation
import AppNavigator from './navigation/AppNavigator';

const App = () => {

  useEffect(() => {
    const bootSplashRenderer = async () => {
      await BootSplash.hide({fade: true});
    };

    bootSplashRenderer();
  },[]);

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
