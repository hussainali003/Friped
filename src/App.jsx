import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import AppNavigator from './navigation/AppNavigator';

import store from './redux/configureStore';

GoogleSignin.configure({webClientId: '472761210351-53hgua5rs1tigs68lubqktq3eh7q4983.apps.googleusercontent.com'});

const App = () => {
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
