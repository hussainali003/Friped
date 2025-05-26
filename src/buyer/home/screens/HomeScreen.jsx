import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View , ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    MainHeader,
    DeliveryInfoSection,
    PromoSection,
    SectionWithTitleAndImages,
    NoticeSection,
} from '../../../common';

import chunkArray from '../../../util/ChunkArray';

import data from '../../../static/HomeDresses';

import * as colors from '../../../config/colors';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const mutatedData = chunkArray(data);

    const handleNavigate = () => {
        navigation.navigate('HomeTab', {screen: 'Dresses'});
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <MainHeader title="Wedding Dresses"/>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollContainer}>
                <DeliveryInfoSection />
                <PromoSection style={styles.promoSection} />
                {mutatedData.map((item) => {
                    if (item[0]?.title === 'Notice') {
                        return (
                            <NoticeSection key={item[0]?.groupedTitle} style={styles.notice} />
                        );
                    }

                    return (
                        <SectionWithTitleAndImages
                            key={item[0]?.groupedTitle}
                            title={item[0]?.groupedTitle || ''}
                            leftTitle={item[0]?.title}
                            leftImage={item[0]?.image}
                            rightTitle={item[1]?.title}
                            rightImage={item[1]?.image}
                            onPress={handleNavigate}
                        />
                    );
                })}
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
