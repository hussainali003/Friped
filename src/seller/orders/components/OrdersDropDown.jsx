import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';

import * as colors from '../../../config/colors';

import ChevronDownSvg from '../../../assets/images/chevron_down.svg';

const OrderDropDown = ({label, title, roles, selected, setSelected}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (role) => {
    setSelected(role);
    setShowOptions(false);
  };

  return (
    <View style={styles.container}>
        {label !== '' && (
            <Text style={styles.label}>{label}</Text>
        )}

        <Pressable
            style={styles.selector}
            onPress={() => setShowOptions(!showOptions)}
            >
            <Text style={styles.selectedText}>
            {selected || title}
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

export default OrderDropDown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 10,
        marginBottom: 10,
    },
    label: {
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
        borderColor: '#ED7D5B',
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
