/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function TabBar({ state, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBarContainer, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const label = route.name; // simple label
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.activeTab]}
          >
            <Text style={{ color: isFocused ? 'blue' : 'gray' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  tabButton: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
});

export default TabBar;

