import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = (color: string) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        button: {
          height: 40,
          backgroundColor: '#63169E',
          borderRadius: 30,

          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonText: {
          color: '#FFF',
          fontWeight: 'bold',
        },
      }),
    [color],
  );

  return {styles};
};
