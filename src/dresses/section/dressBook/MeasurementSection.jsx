import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../config/colors';
import DressTextInput from '../../components/DressTextInput';
import { Button } from '../../../common';

const MeasurementSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.text_one]}>Measurements</Text>
            </View>
            <View style={styles.inputContainer}>
                <DressTextInput label="Bust" placeholder="CM" />
                <DressTextInput label="Waist" placeholder="CM" />
                <DressTextInput label="Butt" placeholder="CM" />
            </View>
            <View style={styles.inputContainer}>
                <DressTextInput label="From" placeholder="dd/mm/yy" />
                <DressTextInput label="To" placeholder="dd/mm/yy" />
                <DressTextInput label="Total Days" placeholder="0 days" />
            </View>
            <View style={styles.inputContainer}>
                <DressTextInput label="Message" placeholder="Type here....." inputStyle={styles.input}/>
            </View>
            <Button title="Send request" style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginBottom: 40,
    },
    textContainer: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#B0B0B0',
    },
    text_one: {
        fontSize: 14,
        color: colors.text_primary,
    },
    inputContainer: {
        flexDirection: 'row',
        columnGap: 12,
        marginBottom: 20,
    },
    input: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        marginHorizontal: 0,
    },
    text: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
    },

});

export default MeasurementSection;
