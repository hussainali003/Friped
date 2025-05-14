// import from node_modules
import { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import colors from config
import * as colors from './config/colors';

// import screens from src
import LoginScreen from './auth/screens/LoginScreen';

const App = () => {

  useEffect(() => {
    const bootSplashRenderer = async () => {
      await BootSplash.hide({fade: true});
    };

    bootSplashRenderer();
  },[]);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <LoginScreen />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background_two,
  },
});

export default App;
