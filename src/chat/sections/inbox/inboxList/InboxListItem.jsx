import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ChevronRightSvg from '../../../../assets/images/chevron_right.svg';

import * as colors from '../../../../config/colors';

const InboxListItem = ({item}) => {
    const navigation = useNavigation();
    const image = item?.image || '';
    const name = item?.name || 'Venz';
    const lastOnline = item?.lastOnline || 'Last seen yesterday';

    const handleNavigateToChat = () => {
        navigation.navigate('Chat');
    };

    return (
        <TouchableOpacity onPress={handleNavigateToChat} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} />
            </View>
            <View>
                <Text style={styles.text_heading}>{name}</Text>
                <Text style={styles.text}>{lastOnline}</Text>
            </View>
            <View style={styles.chevronContainer}>
                <ChevronRightSvg />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16,
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EDEDED',
    },
    imageContainer: {
        height: 48,
        width: 48,
        borderRadius: 48 * 2,
        backgroundColor: colors.background_two,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    chevronContainer: {
        marginLeft: 'auto',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#ADB5BD',
    },
    text_heading: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: '##0F1828',
    },
});

export default InboxListItem;
