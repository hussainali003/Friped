import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../../common';

import NotificationsList from '../components/notificationsList';

import * as colors from '../../../config/colors';

const NotificationsScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Notifications" />
            <NotificationsList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
});

export default NotificationsScreen;
