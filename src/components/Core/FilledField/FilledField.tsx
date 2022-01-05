import React, {FC, useMemo} from 'react';
import {TextInputProps, View, TextInput} from 'react-native';
import {Text} from '../Text';
import {useStyles} from './useStyles';

type TProps = TextInputProps & {
  numberOfLines?: number;
  error?: string;
  rightIcon?: React.ReactNode;
  margin?: {left?: number; top?: number; right?: number; bottom?: number};
};
export const FilledField: FC<TProps> = ({
  numberOfLines = 1,
  error,
  rightIcon,
  margin,
  ...props
}) => {
  const {styles} = useStyles({numberOfLines: numberOfLines});
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
    <View style={[styles.wrapper, margins]}>
      <View style={styles.textInputWrapper}>
        <TextInput
          {...props}
          style={[styles.textInput, props.style]}
          numberOfLines={numberOfLines}
        />
        {rightIcon && <View style={styles.iconWrapper}>{rightIcon}</View>}
      </View>
      <Text color="red">{error || ''}</Text>
    </View>
  );
};
