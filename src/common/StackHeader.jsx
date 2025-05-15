import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import ArrowLeftSvg from '../assets/images/arrow_left_light.svg';


const StackHeader = ({title, mb, style}) => {
    return (
        <View style={[styles.container, {marginBottom: mb}, style]}>
            <TouchableOpacity style={styles.button}>
                <ArrowLeftSvg />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
    },
    button: {
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 20,
        fontWeight: 400,
    },
});

export default StackHeader;
