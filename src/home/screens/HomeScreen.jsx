import { StyleSheet, View , ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MainHeader, DeliveryInfoSection, PromoSection, SectionWithTitleAndImages, NoticeSection } from '../../common';

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

import * as colors from '../../config/colors';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <MainHeader title="Wedding Dresses"/>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollContainer}>
                <DeliveryInfoSection />
                <PromoSection style={styles.promoSection} />
                <SectionWithTitleAndImages title="Choose based on gender"
                    leftImage={GenderBoyPng}
                    leftTitle="Men's fashion"
                    rightImage={GenderGirlPng}
                    rightTitle="Women's fashion"
                />
                <SectionWithTitleAndImages title="Choose by the Occasions"
                    leftImage={OccasionWeddingPng}
                    leftTitle="Wedding"
                    rightImage={OccasionCeremonyPng}
                    rightTitle="Formal Ceremony"
                />
                <NoticeSection />
                <SectionWithTitleAndImages title="By Region/Country/Culture"
                    leftImage={RegionEuropeanPng}
                    leftTitle="European"
                    rightImage={RegionAmericaPng}
                    rightTitle="American"
                />
                <SectionWithTitleAndImages title="By Style"
                    leftImage={StyleVintagePng}
                    leftTitle="Vintage"
                    rightImage={StyleBohemianPng}
                    rightTitle="Bohemian"
                />
                <SectionWithTitleAndImages title="By Material"
                    leftImage={MaterialSatinPng}
                    leftTitle="Satin"
                    rightImage={MaterialLacePng}
                    rightTitle="Lace"
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
    promoSection: {
        marginTop: 0,
    },
});

export default HomeScreen;
