import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AddSquareSvg from '../../../assets/images/add_square.svg';

import * as colors from '../../../config/colors';

const NewProductHeaderSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product information</Text>
            <TouchableOpacity style={[styles.contentContainer, styles.contentContainer_one]}>
                <AddSquareSvg />
                <Text style={styles.text}>Add new Product</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        marginBottom: 20,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
    contentContainer: {
        flex: 1,
        rowGap: 14,
        alignItems: 'center',
        justifyContent: 'center',
        height: 125,
        borderRadius: 8,
    },
    contentContainer_one: {
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default NewProductHeaderSection;
