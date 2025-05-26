import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header, SectionWithTitleAndImages, DeliveryInfoSection } from '../../../common';

import chunkArray from '../../../util/ChunkArray';

import data from '../../../static/Favourites';

import * as colors from '../../../config/colors';

const FavouritesScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const mutatedData = chunkArray(data);

    const handleNavigate = () => {
        navigation.navigate('HomeTab', {screen: 'DressDetail'});
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Favourites" />
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollContainer}>
                <DeliveryInfoSection />
                {mutatedData.map((item, index) => {
                    return (
                        <SectionWithTitleAndImages
                            key={index}
                            title={item[0]?.groupedTitle || ''}
                            leftTitle={item[0]?.title}
                            leftImage={item[0]?.image}
                            rightTitle={item[1]?.title}
                            rightImage={item[1]?.image}
                            onPress={handleNavigate}
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

export default FavouritesScreen;
