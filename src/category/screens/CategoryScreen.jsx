import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header, SectionWithTitleAndImages, DeliveryInfoSection, NoticeSection, PromoSection } from '../../common';

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
import GenderChildBoyPng from '../../assets/images_png/gender_child_boy.png';
import GenderChildGirlPng from '../../assets/images_png/gender_child_girl.png';
import EventCulturePng from '../../assets/images_png/event_culture.png';
import EventProfessionalPng from '../../assets/images_png/event_professional.png';
import EventSocialPng from '../../assets/images_png/event_social.png';
import EventFestivalPng from '../../assets/images_png/event_festival.png';
import EventSportPng from '../../assets/images_png/event_sport.png';
import VacationTravelPng from '../../assets/images_png/vacation_travel.png';
import CausalPng from '../../assets/images_png/causal.png';
import RegionAfricanPng from '../../assets/images_png/region_african.png';
import RegionAsianPng from '../../assets/images_png/region_asian.png';
import RegionMiddleEastPng from '../../assets/images_png/region_middle_east.png';
import RegionOceanianPng from '../../assets/images_png/region_oceanian.png';
import StyleClassicPng from '../../assets/images_png/style_classic.png';
import StyleGlamourPng from '../../assets/images_png/style_glamour.png';
import StyleCasualPng from '../../assets/images_png/style_casual.png';
import StyleModernPng from '../../assets/images_png/style_modern.png';
import MaterialCottonPng from '../../assets/images_png/material_cotton.png';
import MaterialSilkPng from '../../assets/images_png/material_silk.png';


import * as colors from '../../config/colors';

const CategoryScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Header title="Categories we have" />
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollContainer}>
                <DeliveryInfoSection />
                <SectionWithTitleAndImages
                    leftImage={GenderBoyPng}
                    leftTitle="Men's fashion"
                    rightImage={GenderGirlPng}
                    rightTitle="Women's fashion"
                    style={styles.SectionWithTitleAndImages_one}
                />
                <SectionWithTitleAndImages
                    leftImage={GenderChildBoyPng}
                    leftTitle="Boy's fashion"
                    rightImage={GenderChildGirlPng}
                    rightTitle="Girl's fashion"
                    style={styles.SectionWithTitleAndImages_two}
                />
                <SectionWithTitleAndImages title="Choose by the Occasions"
                    leftImage={OccasionWeddingPng}
                    leftTitle="Wedding"
                    rightImage={OccasionCeremonyPng}
                    rightTitle="Formal Ceremony"
                />
                <SectionWithTitleAndImages
                    leftImage={EventCulturePng}
                    leftTitle="Cultural Events"
                    rightImage={EventProfessionalPng}
                    rightTitle="Professional Events"
                />
                <SectionWithTitleAndImages
                    leftImage={EventSocialPng}
                    leftTitle="Social Events"
                    rightImage={EventFestivalPng}
                    rightTitle="Seasonal & Festive"
                />
                <SectionWithTitleAndImages
                    leftImage={EventSportPng}
                    leftTitle="Sporting Events"
                    rightImage={VacationTravelPng}
                    rightTitle="Vacation & Travel"
                />
                <SectionWithTitleAndImages
                    leftImage={CausalPng}
                    leftTitle="Causal"
                />
                <PromoSection />
                <SectionWithTitleAndImages title="By Region/Country/Culture"
                    leftImage={RegionEuropeanPng}
                    leftTitle="European"
                    rightImage={RegionAmericaPng}
                    rightTitle="American"
                />
                <SectionWithTitleAndImages
                    leftImage={RegionAfricanPng}
                    leftTitle="African"
                    rightImage={RegionAsianPng}
                    rightTitle="Asian"
                />
                <SectionWithTitleAndImages
                    leftImage={RegionMiddleEastPng}
                    leftTitle="Middle Eastern"
                    rightImage={RegionOceanianPng}
                    rightTitle="Oceanian"
                />
                <SectionWithTitleAndImages title="By Style"
                    leftImage={StyleVintagePng}
                    leftTitle="Vintage"
                    rightImage={StyleBohemianPng}
                    rightTitle="Bohemian"
                />
                <SectionWithTitleAndImages
                    leftImage={StyleClassicPng}
                    leftTitle="Classic"
                    rightImage={StyleGlamourPng}
                    rightTitle="Glamour"
                    />
                <SectionWithTitleAndImages
                    leftImage={StyleCasualPng}
                    leftTitle="Casual"
                    rightImage={StyleModernPng}
                    rightTitle="Modern"
                />
                <NoticeSection />
                <SectionWithTitleAndImages title="By Material"
                    leftImage={MaterialSatinPng}
                    leftTitle="Satin"
                    rightImage={MaterialLacePng}
                    rightTitle="Lace"
                />
                <SectionWithTitleAndImages
                    leftImage={MaterialCottonPng}
                    leftTitle="Cotton"
                    rightImage={MaterialSilkPng}
                    rightTitle="Silk"
                />
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.background_one,
    },
    contentContainer: {
        paddingBottom: 20,
    },
    SectionWithTitleAndImages_one: {
        marginTop: 12,
    },
    SectionWithTitleAndImages_two: {
        marginTop: 33,
    },
});

export default CategoryScreen;
