import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';

import * as colors from '../config/colors';

import ChevronDownSvg from '../assets/images/chevron_down.svg';

const Dropdown = ({roles, selected, setSelected}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (role) => {
    setSelected(role);
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose your role</Text>
      <Pressable
        style={styles.selector}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={styles.selectedText}>
          {selected || 'Select one'}
        </Text>
        <ChevronDownSvg />
      </Pressable>

      {showOptions && (
        <View style={styles.dropdown}>
          {roles.map((role) => (
            <Pressable key={role} onPress={() => handleSelect(role)} style={styles.option}>
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
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
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
