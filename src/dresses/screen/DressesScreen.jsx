import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeliveryInfoSection, Header} from '../../common';

import FilterSection from '../section/FilterSection';
import DressesListSection from '../section/DressesListSection';

import GenderBoyPng from '../../assets/images_png/gender_boy.png';
import GenderGirlPng from '../../assets/images_png/gender_girl.png';
import OccasionWeddingPng from '../../assets/images_png/occasion_wedding.png';
import OccasionCeremonyPng from '../../assets/images_png/occasion_ceremony.png';
import RegionEuropeanPng from '../../assets/images_png/region_european.png';
import RegionAmericaPng from '../../assets/images_png/region_america.png';
import StyleVintagePng from '../../assets/images_png/style_vintage.png';
import StyleBohemianPng from '../../assets/images_png/style_bohemian.png';
import MaterialSatinPng from '../../assets/images_png/material_satin.png';
import MaterialLacePng from '../../assets/images_png/material_lace.png';

import WeddingDressPng from '../../assets/images_png/wedding_dress.png';
import WeddingGownGirlPng from '../../assets/images_png/wedding_gown_girl.png';
import WeddingDressBeigePng from '../../assets/images_png/wedding_dress_beige.png';
import WeddingDressFlowerPng from '../../assets/images_png/wedding_dress_flower.png';
import WeddingCoatPantPng from '../../assets/images_png/wedding_coat_pant.png';
import WeddingThreePiecePng from '../../assets/images_png/wedding_three_piece.png';

import * as colors from '../../config/colors';

const dressesData = [
    {
        title: 'Wedding dress',
        image: WeddingDressPng,
    },
    {
        title: 'Wedding gown',
        image: WeddingGownGirlPng,
    },
    {
        title: 'Elegant beige dress',
        image: WeddingDressBeigePng,
    },
    {
        title: 'Flowers dressed',
        image: WeddingDressFlowerPng,
    },
    {
        title: 'Coat pant',
        image: WeddingCoatPantPng,
    },
    {
        title: '3 piece suit',
        image: WeddingThreePiecePng,
    },
    {
        title: 'Notice',
    },
    {
        title: 'N',
    },
    {
        title: 'Men’s fashion',
        image: GenderBoyPng,
    },
    {
        title: 'Women’s fashion',
        image: GenderGirlPng,
    },
    {
        title: 'Wedding',
        image: OccasionWeddingPng,
    },
    {
        title: 'Formal Ceremony',
        image: OccasionCeremonyPng,
    },
    {
        title: 'European',
        image: RegionEuropeanPng,
    },
    {
        title: 'American',
        image: RegionAmericaPng,
    },
    {
        title: 'Vintage',
        image: StyleVintagePng,
    },
    {
        title: 'Bohemian',
        image: StyleBohemianPng,
    },
    {
        title: 'Satin',
        image: MaterialSatinPng,
    },
    {
        title: 'Lace',
        image: MaterialLacePng,
    },
];

const DressesScreen = ({navigation}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Header title={navigation.route || 'dresses'} />
            <DeliveryInfoSection />
            <FilterSection />
            <DressesListSection data={dressesData} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    flatList: {
        backgroundColor: colors.white,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.background_one,
    },
    contentContainer: {
        paddingBottom: 20,
    },
});

export default DressesScreen;
