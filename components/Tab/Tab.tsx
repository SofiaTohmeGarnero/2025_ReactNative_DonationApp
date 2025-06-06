import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';

import style from './style';
type TabProps = {
    tabId?: number;
    title: string,
    isInactive?: boolean,
    onPress?: (tabId:number) => void,
};

const Tab = ({tabId, title, isInactive = false, onPress = () => {}}: TabProps) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };
  return (
    <Pressable
      //disabled={isInactive}
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
      onPress={() => {
        onPress(tabId as number);
      }}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, isInactive && style.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
