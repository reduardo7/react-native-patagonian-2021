import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
/*  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },*/

  mainContainer: {
  //  backgroundColor: colors.darkGray,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 70,
    width: '100%',
  },
  subContainer: {
  //  backgroundColor: colors.darkGray,
    paddingHorizontal: 20,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
