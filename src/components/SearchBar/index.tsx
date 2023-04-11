import {BookSearchBarProps} from '@/typings/workbench/welcome';
import {SearchBar} from '@rneui/base';
import {FC} from 'react';
const BookSearchBar: FC<Partial<BookSearchBarProps>> = props => {
  return (
    <SearchBar
      onClear={props.onClear}
      onCancel={props.onClear}
      showLoading={props.showLoading}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
      returnKeyType="done"
      placeholder="搜书名、专栏..."
      platform="ios"
      containerStyle={{backgroundColor: 'transparent'}}
      inputContainerStyle={{backgroundColor: '#F5F5F5'}}
      value={props.value}
      cancelButtonTitle="取消"
      inputStyle={{fontSize: 14}}
      cancelButtonProps={{
        color: 'white',
        buttonTextStyle: {
          fontSize: 14,
          textShadowRadius: 2,
          textShadowColor: '#999',
        },
      }}
    />
  );
};
export default BookSearchBar;
