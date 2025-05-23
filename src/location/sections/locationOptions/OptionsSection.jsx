import { StyleSheet, View } from 'react-native';

import LocationOptionItem from '../../components/locationOptions/LocationOptionItem';

import SearchAltSmallSvg from '../../../assets/images/search_alt_small.svg';
import GpsSvg from '../../../assets/images/gps.svg';
import AddRingSvg from '../../../assets/images/add_ring.svg';

const OptionsSection = () => {
    return (
        <View style={styles.container}>
            <LocationOptionItem title="Search for area, street name" left={<SearchAltSmallSvg />} />
            <LocationOptionItem title="Use current location" left={<GpsSvg />} />
            <LocationOptionItem title="Add address" left={<AddRingSvg />} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        rowGap: 8,
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
});

export default OptionsSection;
