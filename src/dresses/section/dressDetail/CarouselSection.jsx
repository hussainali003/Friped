import { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { View, Dimensions, StyleSheet, Image } from 'react-native';

import data from '../../../static/Carousel';

import * as colors from '../../../config/colors';

const { width } = Dimensions.get('window');

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
        <Carousel
            width={width}
            height={370}
            data={data}
            scrollAnimationDuration={700}
            onSnapToItem={(index) => setCurrentIndex(index)}
            renderItem={({ item }) => (
                <View style={styles.carouselContainer} >
                    <Image source={item} style={styles.carouselImage} />
                </View>
            )}
        />
        {/* Pagination Dots */}
        <View style={styles.pagination}>
            {data.map((_, index) => (
                <View
                    key={index}
                    style={[ styles.dot, currentIndex === index && styles.activeDot]}
                />
            ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
    },
    carouselContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    carouselImage: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    pagination: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        marginHorizontal: 4,
        opacity: 0.3,
        borderRadius: 5,
        backgroundColor: colors.white,
    },
    activeDot: {
        opacity: 1,
    },
});

export default CarouselSection;
