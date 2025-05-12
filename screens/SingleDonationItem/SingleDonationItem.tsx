import React from 'react';

import style from './style';
import {useAppSelector} from '../../redux/typehooks';
import {Button, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../common/globalStyle';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Routes';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';

const SingleDonationItem = () => {
  type NavigationProp = StackNavigationProp<
    RootStackParamList,
    'SingleDonationItem'
  >;
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'SingleDonationItem'>>();
  const {categoryInformation} = route.params;
  const donationItemInformation = useAppSelector(
    state => state.donations.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={require('../../assets/images/Have-Cash-on-Hand.jpg')}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation!.name} />
        <Text style={style.description}>
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
          {donationItemInformation?.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
