import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Pressable, View} from 'react-native';
import Input from '../../components/Input/Input';

import {style} from './style';
import globalStyle from '../../common/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {RootStackParamList, Routes} from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Login = () => {
  type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
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
        <View style={globalStyle.marginBottom24}>
          <Button title={'Login'} />
        </View>
        <Pressable style={style.registrationButton} onPress={() => navigation.navigate(Routes.Registration)}>
          <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;