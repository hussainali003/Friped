import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import DetailCard from '../../../../components/DetailCard';

import DashboardBackgroundBoxPng from '../../../../../assets/images/dashboard_box.svg';
import DashboardBackgroundStarPng from '../../../../../assets/images/dashboard_star.svg';
import DashboardBackgroundBoardPng from '../../../../../assets/images/dashboard_board.svg';
import DashboardBackgroundSalesPng from '../../../../../assets/images/dashboard_sales.svg';

import DashboardBackgroundPng from '../../../../../assets/images_png/dashboard_background.png';

import * as colors from '../../../../../config/colors';


const HeaderDashboardSection = ({item}) => {
    const products = item?.products || 15;
    const rating = item?.rating || 4.9;
    const orders = item?.orders || 10;
    const sales = item?.sales || 100;

    return (
        <View style={styles.container}>
            <ImageBackground source={DashboardBackgroundPng} style={styles.imageBackground}>
                <Text style={styles.title}>Dashboard</Text>
            </ImageBackground>
            <View style={[styles.contentContainer, styles.contentContainer_one]}>
                <DetailCard title="Products" rating={products} right={<DashboardBackgroundBoxPng />} />
                <DetailCard title="Rating" rating={rating} right={<DashboardBackgroundBoardPng />} />
            </View>
            <View style={styles.contentContainer}>
                <DetailCard title="Products" rating={orders} right={<DashboardBackgroundStarPng />} />
                <DetailCard title="Rating" rating={sales} right={<DashboardBackgroundSalesPng />}  />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        rowGap: 20,
        marginBottom: 20,
    },
    imageBackground: {
        height: 100,
        alignItems: 'center',
    },
    title: {
        marginTop: 16,
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: colors.white,
    },
    contentContainer: {
        flexDirection: 'row',
        columnGap: 20,
        marginHorizontal: 16,
    },
    contentContainer_one: {
        marginTop: -60,
    },
    text: {},
});

export default HeaderDashboardSection;
