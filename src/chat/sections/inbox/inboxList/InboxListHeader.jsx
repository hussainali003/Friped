import { StyleSheet, TextInput, View } from 'react-native';

import SearchAltSmallSvg from '../../../../assets/images/search_alt_small.svg';

const InboxListHeader = () => {
    return (
        <View style={styles.container}>
            <SearchAltSmallSvg />
            <TextInput placeholder="Enter Key word here...." placeholderTextColor="#808080" style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 6,
        marginBottom: 20,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E6E6E6',
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#77787D',
    },
});

export default InboxListHeader;
