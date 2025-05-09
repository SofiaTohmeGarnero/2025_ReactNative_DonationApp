import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import style from './style';

type SearchProps = {
    onSearch: (searchValue: string) => void,
    placeholder: string,
};

const Search = ({onSearch, placeholder }:SearchProps) => {
  const textInputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch(searchValue);
  };
  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={22}
      />
      <TextInput
        placeholder={placeholder}
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

export default Search;
