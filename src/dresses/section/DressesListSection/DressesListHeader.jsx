import { StyleSheet, Text, View } from 'react-native';

import SelectedDressCategory from './components/SelectedDressCategory';

import data from '../../../static/DressesCategory';

import * as colors from '../../../config/colors';

const DressesListHeader = () => {
    return (
        <>
            <SelectedDressCategory data={data} />
            <View style={styles.textContainer}>
                <Text style={styles.textContent}>Dresses near you</Text>
                <Text style={styles.textContent_dim}>(50km)</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        columnGap: 5,
        marginTop: 24,
        marginHorizontal: 16,
        marginBottom: 18,
    },
    textContent: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        color: colors.text_primary,
    },
    textContent_dim: {
        alignSelf: 'flex-end',
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        color: colors.text_dim,
    },
});

export default DressesListHeader;
