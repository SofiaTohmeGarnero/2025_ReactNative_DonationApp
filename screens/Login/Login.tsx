import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Pressable, View, Text} from 'react-native';
import Input from '../../components/Input/Input';

import {style} from './style';
import globalStyle from '../../common/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {RootStackParamList, Routes} from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { loginUser } from '../../api/user';
import { logIn } from '../../redux/reducers/User';
import { useAppDispatch } from '../../redux/typehooks';

const Login = () => {
  type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string|undefined>('');
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
        {error && error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyle.marginBottom24}>
        <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              /*
                No funciona porque no me puedo conectar a firebase, pero sino debería ser que el dispatch me actualice la data del user y el initial state (user) estar vacío
                console.log(user)
              */
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 8}
          />
        </View>
        <Pressable style={style.registrationButton} onPress={() => navigation.navigate(Routes.Registration)}>
          <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;