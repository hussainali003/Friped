import { useNavigation } from '@react-navigation/native';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import ArrowLeftSvg from '../assets/images/arrow_left_light.svg';


const StackHeader = ({title, mb, style}) => {
    const navigation = useNavigation();

    const handleNavigateToBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    return (
        <View style={[styles.container, {marginBottom: mb}, style]}>
            <TouchableOpacity onPress={handleNavigateToBack} style={styles.button}>
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
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 20,
        fontWeight: 400,
    },
});

export default StackHeader;
