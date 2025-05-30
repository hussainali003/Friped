import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';

import ChevronDownSvg from '../assets/images/chevron_down_dark.svg';

import * as colors from '../config/colors';

const Dropdown = ({label = 'Choose your role', roles, onPress, selected, style, labelStyle, selectorStyle, selectTextStyle}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDropDownClose = (role) => {
    onPress(role);
    setShowOptions(false);
  };

  return (
    <View style={[styles.container, style]}>
      {label !== '' && (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      )}
      <Pressable
        style={[styles.selector, selectorStyle]}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={[styles.selectedText, selectTextStyle]}>
          {selected || 'Select one'}
        </Text>
        <ChevronDownSvg />
      </Pressable>

      {showOptions && (
        <View style={styles.dropdown}>
          {roles.map((role) => (
            <Pressable key={role} onPress={() => handleDropDownClose(role)} style={styles.option}>
              <Text style={styles.optionText}>{role}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: colors.text_primary,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#8C8C8C',
    backgroundColor: '#fff',
  },
  selectedText: {
    fontFamily: 'Lato-Regular',
    color: colors.text_dim,
  },
  arrow: {
    color: '#666',
  },
  dropdown: {
    overflow: 'hidden',
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    color: '#333',
  },
});
