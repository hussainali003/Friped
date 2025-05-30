import React, { ReactNode } from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';

import * as colors from '../config/colors';

type FontWeight = 'light' | 'medium' | 'bold' | 'regular';

interface CustomTextProps extends RNTextProps {
  children?: ReactNode;
  mt?: number;
  mb?: number;
  mv?: number;
  mh?: number;
  textAlign?: TextStyle['textAlign'];
  lineHeight?: number;
  fontFamily?: FontWeight;
  color?: string;
  size?: number;
  style?: TextStyle;
}

const Text: React.FC<CustomTextProps> = ({
  children,
  mt,
  mb,
  mv,
  mh,
  textAlign,
  lineHeight,
  fontFamily,
  color,
  size,
  style,
  ...rest
}) => {
  const extractSelectedFontFamily = (): TextStyle => {
    switch (fontFamily) {
      case 'light':
        return { fontFamily: 'Lato-Light' };
      case 'medium':
        return { fontFamily: 'Lato-Medium' };
      case 'bold':
        return { fontFamily: 'Lato-Bold' };
      default:
        return { fontFamily: 'Lato-Regular' };
    }
  };

  return (
    <RNText
      {...rest}
      style={[
        styles.text,
        extractSelectedFontFamily(),
        textAlign !== undefined && { textAlign },
        lineHeight !== undefined && { lineHeight },
        mt !== undefined && { marginTop: mt },
        mb !== undefined && { marginBottom: mb },
        mv !== undefined && { marginVertical: mv },
        mh !== undefined && { marginHorizontal: mh },
        size !== undefined && { fontSize: size },
        color !== undefined && { color },
        style,
      ]}
    >
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
