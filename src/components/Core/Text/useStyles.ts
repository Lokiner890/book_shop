import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = (size: number, color: string) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          fontSize: size,
          color,
        },
      }),
    [size, color],
  );
  return {styles};
};
