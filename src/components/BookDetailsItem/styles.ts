import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { DEVICE_WIDTH } from '../../utils/dimensions';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
  flatlistContent: {
    paddingHorizontal: 20,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  listItemContainerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    width: '90%',
  },
  cardContainer: {
    borderRadius: 30,
    marginHorizontal: 7,
    height: 220,
    width: DEVICE_WIDTH * 0.4,
    backgroundColor: 'white',
    elevation: 5,
    marginVertical: 5,
  },
  imageFrame: {
    borderRadius: 30,
    overflow: 'hidden',
    height: '70%',
    width: '100%',
    marginBottom: 10,
  },
  image: {
    resizeMode: 'cover',
    height: '200%',
    width: '100%',
    transform: [{ translateY: -110 }],
  },
  placeholderImage: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
});

export default styles;
