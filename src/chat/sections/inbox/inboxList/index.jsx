import { FlatList, StyleSheet } from 'react-native';

import InboxListItem from './InboxListItem';
import InboxListEmpty from './InboxListEmpty';
import InboxListHeader from './InboxListHeader';

import data from '../../../../static/Inbox';

import * as colors from '../../../../config/colors';

const InboxList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListHeaderComponent={InboxListHeader}
            ListEmptyComponent={InboxListEmpty}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <InboxListItem item={item} />;

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatListContentContainer: {
        paddingTop: 20,
        paddingHorizontal: 16,
    },
});

export default InboxList;
