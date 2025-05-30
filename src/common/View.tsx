import React, { ReactNode } from 'react';
import { View as RNView, ViewStyle } from 'react-native';

type CustomViewProps = {
  children?: ReactNode;
  style?: ViewStyle;

  // Dimensions
  w?: ViewStyle['width'];
  h?: ViewStyle['height'];

  // Positioning
  position?: ViewStyle['position'];
  left?: ViewStyle['left'];
  right?: ViewStyle['right'];
  top?: ViewStyle['top'];
  bottom?: ViewStyle['bottom'];

  // Flexbox
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  flexGrow?: ViewStyle['flexGrow'];
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  alignSelf?: ViewStyle['alignSelf'];
  columnGap?: ViewStyle['columnGap'];
  rowGap?: ViewStyle['rowGap'];

  // Padding
  pl?: ViewStyle['paddingLeft'];
  pr?: ViewStyle['paddingRight'];
  pt?: ViewStyle['paddingTop'];
  pb?: ViewStyle['paddingBottom'];
  pv?: ViewStyle['paddingVertical'];
  ph?: ViewStyle['paddingHorizontal'];

  // Margin
  ml?: ViewStyle['marginLeft'];
  mr?: ViewStyle['marginRight'];
  mt?: ViewStyle['marginTop'];
  mb?: ViewStyle['marginBottom'];
  mv?: ViewStyle['marginVertical'];
  mh?: ViewStyle['marginHorizontal'];

  // Border
  borderWidth?: ViewStyle['borderWidth'];
  borderTopWidth?: ViewStyle['borderTopWidth'];
  borderBottomWidth?: ViewStyle['borderBottomWidth'];
  borderRadius?: ViewStyle['borderRadius'];
  borderColor?: ViewStyle['borderColor'];

  // Z Index
  zIndex?: ViewStyle['zIndex'];

  // Background
  backgroundColor?: ViewStyle['backgroundColor'];
};

const View: React.FC<CustomViewProps> = ({
  children,
  w,
  h,
  position,
  left,
  right,
  top,
  bottom,
  flex,
  flexDirection,
  flexGrow,
  alignItems,
  justifyContent,
  alignSelf,
  columnGap,
  rowGap,
  pl,
  pr,
  pt,
  pb,
  pv,
  ph,
  ml,
  mr,
  mt,
  mb,
  mv,
  mh,
  borderWidth,
  borderTopWidth,
  borderBottomWidth,
  borderRadius,
  borderColor,
  zIndex,
  backgroundColor,
  style,
}) => {
  return (
    <RNView
      style={[
        w !== undefined && { width: w },
        h !== undefined && { height: h },
        position !== undefined && { position },
        left !== undefined && { left },
        right !== undefined && { right },
        top !== undefined && { top },
        bottom !== undefined && { bottom },
        flex !== undefined && { flex },
        flexDirection !== undefined && { flexDirection },
        flexGrow !== undefined && { flexGrow },
        alignItems !== undefined && { alignItems },
        justifyContent !== undefined && { justifyContent },
        alignSelf !== undefined && { alignSelf },
        columnGap !== undefined && { columnGap },
        rowGap !== undefined && { rowGap },
        pl !== undefined && { paddingLeft: pl },
        pr !== undefined && { paddingRight: pr },
        pt !== undefined && { paddingTop: pt },
        pb !== undefined && { paddingBottom: pb },
        pv !== undefined && { paddingVertical: pv },
        ph !== undefined && { paddingHorizontal: ph },
        ml !== undefined && { marginLeft: ml },
        mr !== undefined && { marginRight: mr },
        mt !== undefined && { marginTop: mt },
        mb !== undefined && { marginBottom: mb },
        mv !== undefined && { marginVertical: mv },
        mh !== undefined && { marginHorizontal: mh },
        borderWidth !== undefined && { borderWidth },
        borderTopWidth !== undefined && { borderTopWidth },
        borderBottomWidth !== undefined && { borderBottomWidth },
        borderRadius !== undefined && { borderRadius },
        borderColor !== undefined && { borderColor },
        zIndex !== undefined && { zIndex },
        backgroundColor !== undefined && { backgroundColor },
        style,
      ]}
    >
      {children}
    </RNView>
  );
};

export default View;
