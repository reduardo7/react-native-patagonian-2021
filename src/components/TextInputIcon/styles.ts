import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { DEVICE_WIDTH } from '../../utils/dimensions';

const styles = StyleSheet.create({
  searchSection2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    width: '90%',
  },
  searchSection: {
    alignContent: 'center',
    backgroundColor: colors.lightOrange,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    width: DEVICE_WIDTH * 0.9,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderRadius: 50,

    backgroundColor: colors.lightOrange,
    color: '#7F0909',
  },
});

export default styles;
