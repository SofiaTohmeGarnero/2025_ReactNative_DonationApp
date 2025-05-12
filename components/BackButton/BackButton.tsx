import React from 'react';

import style from './style';
import {Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

type BackButtonProps = {
  onPress: ()=>void,
};
const BackButton = ({onPress}: BackButtonProps) => {
  return (
    <Pressable onPress={() => onPress()} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};


export default BackButton;