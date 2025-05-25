import { StyleSheet, Text } from 'react-native';

import HeaderDashboardSection from './headerSections/HeaderDashboardSection';
import HeaderCategorySection from './headerSections/HeaderCategorySection';

import { NoticeSection } from '../../../../common';

import * as colors from '../../../../config/colors';

const DashboardListHeader = () => {
    return (
        <>
            <HeaderDashboardSection />
            <HeaderCategorySection />
            <NoticeSection style={styles.noticeContainer} />
            <Text style={styles.title}>Top Products </Text>
        </>
    );
};

const styles = StyleSheet.create({
    noticeContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
});

export default DashboardListHeader;
