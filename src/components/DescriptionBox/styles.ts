import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    height: 152,
    width: 374,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default styles;
