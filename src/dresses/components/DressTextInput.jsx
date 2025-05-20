import { StyleSheet, Text, TextInput, View } from 'react-native';

const DressTextInput = ({label, placeholder, inputStyle}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.label]}>{label}</Text>
            <TextInput placeholder={placeholder} placeholderTextColor="#B0B0B0" style={[styles.text, styles.input, inputStyle]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        marginBottom: 3,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ED7D5B',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#B0B0B0',
    },
});

export default DressTextInput;
