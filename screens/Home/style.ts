import {StyleSheet} from 'react-native';


const style = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    color: '#636776',
  },
  username: {
    marginTop: 5,
  },
  profileImage: {
    width: 70,
    height: 70,
  },
  searchBox: {
    marginHorizontal: 24,
    marginVertical: 20,
  },
  highlightedImageContainer: {
    marginHorizontal: 24,
  },
  highlightedImage: {
    width: '100%',
    height: 180,
  },
  categoryHeader: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  categories: {
    marginLeft: 24,
  },
  categoryItem: {
    marginRight: 10,
  },
  donationItemsContainer: {
    marginTop: 20,
    marginHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-evenly'
  },
});

export default style;