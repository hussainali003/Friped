import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';

import { Header } from '../../common';

import HomePage from '../pages/HomePage';
import GiveFeedBackPage from '../pages/GiveFeedBackPage';
import RatingChoicePage from '../pages/RatingChoicePage';
import SubmitRatingPage from '../pages/SubmitRatingPage';
import RatingSubmittedPage from '../pages/RatingSubmittedPage';

import GiveRatingHeader from '../components/giveRating/GiveRatingHeader';

import * as colors from '../../config/colors';

const GiveRatingScreen = () => {
    const insets = useSafeAreaInsets();
    const [selectedPage, setSelectedPage] = useState(1);

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            {selectedPage === 1 && <Header title="Give Rating"/>}
            {(selectedPage !== 1 && selectedPage !== 5) && <GiveRatingHeader selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
            {selectedPage === 1 && <HomePage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
            {selectedPage === 2 && <RatingChoicePage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
            {selectedPage === 3 && <GiveFeedBackPage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
            {selectedPage === 4 && <SubmitRatingPage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
            {selectedPage === 5 && <RatingSubmittedPage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
});

export default GiveRatingScreen;
