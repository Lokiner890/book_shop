import React, {FC, useMemo} from 'react';
import {Text as TextNative, TextProps} from 'react-native';
import {useStyles} from './useStyles';

type TProps = TextProps & {
  children: string | number | JSX.Element[];
  size?: number;
  color?: string;
  align?: 'left' | 'center' | 'right';
  margin?: {left?: number; top?: number; right?: number; bottom?: number};
};
export const Text: FC<TProps> = ({
  children,
  size = 14,
  color = 'black',
  align = 'left',
  margin,
  ...props
}) => {
  const {styles} = useStyles(size, color);
  const margins = useMemo(
    () => ({
      marginTop: margin?.top || 0,
      marginLeft: margin?.left || 0,
      marginRight: margin?.right || 0,
      marginBottom: margin?.bottom || 0,
    }),
    [margin],
  );
  return (
    <TextNative
      {...props}
      style={[styles.text, {textAlign: align}, margins, props.style]}>
      {children}
    </TextNative>
  );
};
