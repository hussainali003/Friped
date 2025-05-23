import { StyleSheet, Text, View } from 'react-native';

import QuestionCard from '../../components/faq/QuestionCard';

import * as colors from '../../../config/colors';

const QuestionSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Questions</Text>
            <QuestionCard title="How to create a account?" description="Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account." />
            <QuestionCard title="How to add a payment method by this app?" description="Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account." />
            <QuestionCard title="What Time Does The Stock Market Open?" description="Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account." />
            <QuestionCard title="Is The Stock Market Open On Weekends?" description="Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account." />
            <QuestionCard title="How to add a payment method by this app?" description="Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account." />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        rowGap: 16,
        paddingBottom: 50,
        paddingHorizontal: 16,
    },
    title: {
        marginBottom: 4,
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
});

export default QuestionSection;
