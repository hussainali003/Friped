import { FlatList, StyleSheet } from 'react-native';

import NotificationsListItem from './NotificationsListItem';
import NotificationsListEmpty from './NotificationsListEmpty';

import data from '../../../../static/Notifications';

import * as colors from '../../../../config/colors';

const NotificationsList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={NotificationsListEmpty}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <NotificationsListItem item={item} />;

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatListContentContainer: {
        rowGap: 16,
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
});

export default NotificationsList;
