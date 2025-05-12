import React from 'react';
import {Image, Pressable, View} from 'react-native';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import style from './style';

type SingleDonationItemProps = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress: (donationItemId: number) => void;
  donationItemId: number;
};

const SingleDonationItem = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
  onPress,
  donationItemId,
}: SingleDonationItemProps) => {

  //sobrescribo la uri con una imagen local, porque la app no me la levanta por temas de seguridad

  return (
    <Pressable
      style={style.card}
      onPress={() => {
        onPress(donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image
          resizeMode={'cover'}
          source={require('../../assets/images/Have-Cash-on-Hand.jpg')}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header title={donationTitle} type={3} color={'#0A043C'} numberOfLines={1} />
        <View style={style.price}>
          <Header title={'$' + price.toFixed(2)} type={3} color={'#156CF7'} />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDonationItem;
