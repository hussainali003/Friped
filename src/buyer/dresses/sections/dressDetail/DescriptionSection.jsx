import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as colors from '../../../../config/colors';

const DescriptionSection = ({details}) => {
    const navigation = useNavigation();
    const name = details?.name || 'Mermaid wedding dress';
    const depositePrice = details?.depositePrice || '20';
    const color = details?.color || 'White';
    const fabric = details?.fabric || 'Net';
    const conditionOfDress = details?.conditionOfDress || 'Used one time';
    const location = details?.location || 'Available with in the 50km Radius around the Connaught Place delhi';
    const size = details?.size || 'M';
    const price = details?.price || '30';

    const handleNavigate = () => {
        navigation.navigate('HomeTab', {screen: 'DressBook'});
    };

    return (
        <View style={styles.container}>
            <View style={styles.container_one}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text_one]}>{name}</Text>
                    <Text style={styles.text}>{`Security deposit price: $${depositePrice}`}</Text>
                    <Text style={styles.text}>{`Colour: ${color}`}</Text>
                    <Text style={styles.text}>{`Type of fabric: ${fabric}`}</Text>
                    <Text style={styles.text}>{`Condition of dress: ${conditionOfDress}`}</Text>
                    <Text style={styles.text}>{location}</Text>
                </View>
                <View style={styles.sizeContainer}>
                    <Text style={styles.text}>size</Text>
                    <View style={styles.sizeContentContainer}>
                        <Text>{size}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container_two}>
                <Text style={[styles.text, styles.text_one]}>{`$${price} daily rental price`}</Text>
                <TouchableOpacity onPress={handleNavigate} style={styles.button}>
                    <Text style={[styles.text, styles.buttonText]}>Book now</Text>
                    <View style={styles.buttonTextBorder}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#B0B0B0',
    },
    container_one: {
        flexDirection: 'row',
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#B0B0B0',
    },
    textContainer: {
        width: '80%',
    },
    text_one: {
        marginBottom: 6,
        fontSize: 16,
        color: colors.dashLine,
    },
    sizeContainer: {
        marginLeft: 'auto',
        rowGap: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeContentContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.dashLine,
        borderRadius: 50 * 2,
    },
    container_two: {
        flex: 1,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        height: 36,
        justifyContent: 'center',
        paddingLeft: 8,
        marginLeft: 'auto',
    },
    buttonText: {
        color: '#2C3E50',
    },
    buttonTextBorder: {
        height: 1,
        backgroundColor: '#2C3E50',
    },
    text: {
        marginBottom: 4,
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#666666',
    },
});

export default DescriptionSection;
