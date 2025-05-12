import React from 'react';

import style from './style';
import {useAppSelector} from '../../redux/typehooks';
import {SafeAreaView, ScrollView} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../common/globalStyle';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';

const SingleDonationItem = () => {
  type NavigationProp = StackNavigationProp<
    RootStackParamList,
    'SingleDonationItem'
  >;
  const navigation = useNavigation<NavigationProp>();
  const donationItemInformation = useAppSelector(
    state => state.donations.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
