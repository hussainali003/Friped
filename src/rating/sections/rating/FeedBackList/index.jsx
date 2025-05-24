import { FlatList, StyleSheet } from 'react-native';

import FeedBackListItem from './FeedBackListItem';
import FeedBackListEmpty from './FeedBackListEmpty';
import FeedBackListHeader from './FeedBackListHeader';

import * as colors from '../../../../config/colors';

const data = [1,2,3,5,6];

const FeedBackList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={FeedBackListEmpty}
            ListHeaderComponent={FeedBackListHeader}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
            stickyHeaderIndices={[0]}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({_, index}) => <FeedBackListItem index={index} totalIndex={data.length - 1} />;

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

export default FeedBackList;
