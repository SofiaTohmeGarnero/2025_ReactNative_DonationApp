import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

import style from './style';
import globalStyle from '../../common/globalStyle';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { createUser } from '../../api/user';

const Registration = () => {
  type NavigationProp = StackNavigationProp<RootStackParamList, 'Registration'>;
  const navigation = useNavigation<NavigationProp>();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Hello and Welcome!'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'First & Last Name'}
            placeholder={'Enter your full name...'}
            onChangeText={value => setFullName(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            title={'Registration'}
            //onPress={async () => await createUser(fullName, email, password)}
            onPress={async () => {
              let user = await createUser(fullName, email, password);
              if ('error' in user) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfully registered');
                setTimeout(() => navigation.goBack(), 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;