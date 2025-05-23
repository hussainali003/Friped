import { StyleSheet, TouchableOpacity } from 'react-native';

const LocationSavedItemButton = ({onPress, icon}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {icon}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 26,
        width: 26,
        borderWidth: 1,
        borderRadius: 26 * 2,
        borderColor: '#E1E1E1',
    },
});

export default LocationSavedItemButton;
