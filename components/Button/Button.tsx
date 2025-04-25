import React from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';

type ButtonProps = {
    title: string,
    isDisabled?: boolean,
    onPress?: () => void,
}
const Button = ({title, isDisabled = false, onPress = () => {}}:ButtonProps ) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[style.button, isDisabled && style.disabled]}
      onPress={() => onPress()}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
