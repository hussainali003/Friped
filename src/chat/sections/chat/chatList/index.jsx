import { FlatList, StyleSheet } from 'react-native';

import ChatListItem from './ChatListItem';
import ChatListEmpty from './ChatListEmpty';

import data from '../../../../static/Chat';

import * as colors from '../../../../config/colors';

const ChatList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={ChatListEmpty}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <ChatListItem item={item} />;

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatListContentContainer: {
        rowGap: 30,
        paddingTop: 20,
        paddingHorizontal: 16,
    },
});

export default ChatList;
