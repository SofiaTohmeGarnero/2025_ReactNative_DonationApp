import React, {useState} from 'react';
import {View, Text, TextInput, KeyboardTypeOptions} from 'react-native';
import style from './style';
import globalStyle from '../../common/globalStyle';

type InputProps = {
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  label: string;
  onChangeText: (val:string) => void;
  secureTextEntry?: boolean;
};

const Input = ({
  keyboardType = 'default',
  placeholder,
  label,
  onChangeText,
  secureTextEntry = false, 
}:InputProps) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder ? placeholder : undefined}
        style={style.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};
export default Input;