// import from node_modules
import { useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

import * as colors from './config/colors';

const App = () => {

  useEffect(() => {
    const bootSplashRenderer = async () => {
      await BootSplash.hide({fade: true});
    };

    bootSplashRenderer();
  },[]);

  return (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
});

export default App;
