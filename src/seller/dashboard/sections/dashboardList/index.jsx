import { FlatList, StyleSheet } from 'react-native';

import DashboardListItem from './DashboardListItem';
import DashboardListEmpty from './DashboardListEmpty';
import DashboardListHeader from './DashboardListHeader';

import data from '../../../../static/TopProducts';

import * as colors from '../../../../config/colors';

const DashboardList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={DashboardListEmpty}
            ListHeaderComponent={DashboardListHeader}
            contentContainerStyle={styles.flatListContentContainer}
            style={styles.flatList}
        />
    );
};

const keyExtractor = (_, index) => index;

const renderItem = ({item}) => <DashboardListItem item={item} />;

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: colors.white,
    },
    flatListContentContainer: {
        paddingBottom: 20,
        rowGap: 15,
    },
});

export default DashboardList;
