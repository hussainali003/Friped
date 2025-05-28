import { StyleSheet, Text, View } from 'react-native';

import * as colors from '../../../config/colors';

const LoginHeading = ({title, size}) => {

    const textSize = () => ({
        fontSize: size === 'small' ? 14 : 20,
    });

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}/>
            <Text style={[styles.title, textSize()]}>{title}</Text>
            <View style={styles.contentContainer}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 8,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.text_primary,
    },
    contentContainer: {
        width: 41,
        borderWidth: 0.5,
        borderColor: colors.contentContainer,
    },
});

export default LoginHeading;
