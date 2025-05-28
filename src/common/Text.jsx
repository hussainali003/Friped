import { Text as RNText, StyleSheet } from 'react-native';

import * as colors from '../config/colors';

const Text = ({children, mt,mb,mv,mh, textAlign, lineHeight, fontFamily, color, size, style}) => {

    const extractSelectedFontFamily = () => {
        switch (fontFamily) {
            case 'light':
                return {fontFamily: 'Lato-Light'};
            case 'medium':
                return {fontFamily: 'Lato-Medium'};
            case 'bold':
                return {fontFamily: 'Lato-Bold'};
            default:
                return {fontFamily: 'Lato-Regular'};
        }
    };

    return (
        <RNText style={[
            styles.text,
            extractSelectedFontFamily(),
            {textAlign: textAlign},
            {lineHeight: lineHeight},
            {marginTop: mt},
            {marginBottom: mb},
            {marginVertical: mv},
            {marginHorizontal: mh},
            {fontSize: size},
            {color: color},
            style,
        ]}>
            {children}
        </RNText>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: colors.text_primary,
    },
});

export default Text;
