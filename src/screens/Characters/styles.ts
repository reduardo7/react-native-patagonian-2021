import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContent: {
    paddingTop: 20,
    backgroundColor: '#E5E5E5',
  },
  cardListContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingTop: 20,
    marginHorizontal: 20,
    marginBottom: 280,
  },
  wholeScreenCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCard: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 30,
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  rowImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
  rowText: {
    flex: 1,
    flexShrink: 1,
    marginLeft: 15,
  },
});

export default styles;
