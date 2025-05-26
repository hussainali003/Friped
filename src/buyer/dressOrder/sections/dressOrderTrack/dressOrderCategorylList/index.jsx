import { StyleSheet, View} from 'react-native';

import OrderListItem from './DressOrderCategoryListItem';

import chunkArray from '../../../../../util/ChunkArray';

const DressOrderCategorylList = ({data = []}) => {
    const mutatedData = chunkArray(data);

    return (
        <View style={styles.container}>
            {mutatedData.map((item, index) => {
                return (
                    <OrderListItem key={index} arrItem={item} arrIndex={index} totalDresses={data.length} />
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default DressOrderCategorylList;
