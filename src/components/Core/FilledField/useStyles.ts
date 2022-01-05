import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = ({numberOfLines}: {numberOfLines: number}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {},
        textInput: {
          height: 30,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 0,
        },
        textInputWrapper: {
          flexGrow: 1,
          flexShrink: 1,
        },
        iconWrapper: {
          flexShrink: 0,
        },
      }),
    [],
  );

  return {styles};
};
