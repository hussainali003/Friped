import { StyleSheet, View } from 'react-native';

import NotificationsListItemTitle from './NotificationsListItemTitle';
import NotificationsListItemFooter from './NotificationsListItemFooter';
import NotificationsListItemRatingSection from './NotificationsListItemRatingSection';

import * as colors from '../../../config/colors';

const NotificationsListItem = () => {

    return (
        <View style={styles.container}>
            <NotificationsListItemTitle />
            <NotificationsListItemRatingSection />
            <NotificationsListItemFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.dashLine,
        backgroundColor: colors.background_two,
    },
});

export default NotificationsListItem;
