import { StyleSheet } from 'react-native';

import ProductItem from '../../../components/ProductItem';

const DashBoardListItem = ({item}) => {
    return (
        <ProductItem item={item} style={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
    },
});

export default DashBoardListItem;
