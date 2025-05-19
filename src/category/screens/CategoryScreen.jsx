import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header, SectionWithTitleAndImages, DeliveryInfoSection, NoticeSection, PromoSection } from '../../common';

import chunkArray from '../../util/ChunkArray';

import data from '../../static/Category';

import * as colors from '../../config/colors';

const CategoryScreen = () => {
    const insets = useSafeAreaInsets();
    const mutatedData = chunkArray(data);

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Categories we have" />
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollContainer}>
                <DeliveryInfoSection />
                {mutatedData.map((item, index) => {
                    if (item[0]?.title === 'Promo') {
                        return (
                            <PromoSection key={index} />
                        );
                    }

                    if (item[0]?.title === 'Notice') {
                        return (
                            <NoticeSection key={index} />
                        );
                    }

                    return (
                        <SectionWithTitleAndImages
                            key={index}
                            title={item[0]?.groupedTitle || ''}
                            leftTitle={item[0]?.title}
                            leftImage={item[0]?.image}
                            rightTitle={item[1]?.title}
                            rightImage={item[1]?.image}
                            style={index === 0 && styles.sectionWithTitleAndImages_one}
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
    sectionWithTitleAndImages_one: {
        marginTop: 0,
    },
});

export default CategoryScreen;
