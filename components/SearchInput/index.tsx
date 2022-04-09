import React, {ChangeEvent} from 'react';
import {Input, SearchContainer} from './styles';
import Icon from '../Icon';

interface IProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({onSearch}: IProps) => {
  return (
    <SearchContainer>
      <Icon src="/assets/icons/search.png" style={{width: 13.34, height: 13.33}} />
      <Input placeholder="Search" onChange={onSearch} />
    </SearchContainer>
  );
};

export default SearchInput;
