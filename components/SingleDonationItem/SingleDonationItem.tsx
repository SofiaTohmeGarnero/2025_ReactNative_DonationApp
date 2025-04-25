import React from 'react';
import {Image, View} from 'react-native';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import style from './style';

type SingleDonationItemProps = {
  uri: string,
  badgeTitle: string,
  donationTitle: string,
  price: number,
};

const SingleDonationItem = ({uri, badgeTitle, donationTitle, price}: SingleDonationItemProps) => {
    return (
        <View>
          <View>
            <View style={style.badge}>
              <Badge title={badgeTitle} />
            </View>
            <Image
              resizeMode={'contain'}
              source={{uri}}
              style={style.image}
            />
          </View>
          <View style={style.donationInformation}>
            <Header title={donationTitle} type={3} color={'#0A043C'} />
            <View style={style.price}>
              <Header
                title={'$' + price.toFixed(2)}
                type={3}
                color={'#156CF7'}
              />
            </View>
          </View>
        </View>
      );
};



export default SingleDonationItem;
