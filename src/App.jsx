// import from node_modules
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { store } from './redux/configureStore';

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
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
