import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import ChevronRightSvg from '../../../assets/images/chevron_right.svg';

const ProfileOptionItem = ({left, title}) => {
    const navigation = useNavigation();

    const handleNavigate = (location) => {
        navigation.navigate('HomeTab', {screen: location});
    };

    return (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={() => handleNavigate(title)} style={styles.selector}>
                {left && (
                    left
                )}
                <Text style={[styles.selectedText]}>
                    {title}
                </Text>
                <View style={styles.chevronContainer}>
                    <ChevronRightSvg />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
    },
    selector: {
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
    chevronContainer: {
        marginLeft: 'auto',
    },
});

export default ProfileOptionItem;
