import React, {FC, useMemo} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Text} from '../';
import {useStyles} from './useStyles';

type TProps = TouchableOpacityProps & {
  children: string | number;
  title?: string;
  color?: string;
  onPress: () => any;
  margin?: {left?: number; top?: number; right?: number; bottom?: number};
};
export const Button: FC<TProps> = ({
  children,
  title = 'Button',
  color = 'red',
  margin,
  onPress,
  ...props
}) => {
  const {styles} = useStyles(color);
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
    <TouchableOpacity
      onPress={onPress}
      {...props}
      style={[styles.button, margins, props.style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
