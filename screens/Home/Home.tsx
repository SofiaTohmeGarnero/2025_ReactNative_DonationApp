import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../common/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title='Noris' type={1}/>
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('You just pressed me!');
        }}
      />
      <Button title={'Donate'} isDisabled={true} />
      <Tab title={'Highlight'} />
      <Tab title={'Highlight'} isInactive={true} />
      <Badge title={'Environment'} />
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={22}
      />
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
    </SafeAreaView>
  );
}

export default Home;
