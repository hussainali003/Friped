import { FlatList, StyleSheet } from 'react-native';

import WalletListItem from './WalletListItem';
import WalletListEmpty from './WalletListEmpty';
import WalletListHeader from './WalletListHeader';

import * as colors from '../../../../../config/colors';

const data = [1,2,3];

const WalletList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={WalletListEmpty}
            ListHeaderComponent={WalletListHeader}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
            stickyHeaderIndices={[0]}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({_, index}) => <WalletListItem index={index} totalIndex={data.length - 1} />;

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatListContentContainer: {
        rowGap: 20,
        paddingBottom: 20,
    },
});

export default WalletList;
