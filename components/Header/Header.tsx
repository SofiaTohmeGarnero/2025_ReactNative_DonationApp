import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

type HeaderProps = {
  title: string;
  type?: number;
  color?: string;
};

const Header = ({title = '', type = 1, color = '#000000'}: HeaderProps) => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
    }
  };
  return (
    <View>
      <Text style={[styleToApply(), color && {color}]}>{title}</Text>
    </View>
  );
};

export default Header;
