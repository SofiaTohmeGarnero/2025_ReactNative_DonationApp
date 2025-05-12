import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  card:{
    width: 170,
  }, 
  image: {
    width: 155,
    height: 170,
    borderRadius: 20,
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: 13,
    left: 10,
  },
  donationInformation: {
    marginTop: 16,
  },
  price: {
    marginTop: 5,
  },
});

export default style;
