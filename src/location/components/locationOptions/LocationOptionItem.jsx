import { TouchableOpacity, StyleSheet, Text} from 'react-native';

const LocationOptionItem = ({left, title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {left && (
                left
            )}
            <Text style={[styles.selectedText]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E6E6E6',
    },
    selectedText: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#77787D',
    },
});

export default LocationOptionItem;
