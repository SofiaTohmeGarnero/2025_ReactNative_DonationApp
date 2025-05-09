import {Pressable, SafeAreaView, Text} from 'react-native';
import globalStyle from '../../common/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
// Importing the useSelector hook from the React Redux library
// This hook allows us to select and retrieve data from the store
import {useAppDispatch, useAppSelector} from '../../redux/typehooks';
import { updateFirstName } from '../../redux/reducers/User';

function Practice(): React.JSX.Element {

  // Using the useSelector hook to select the "user" slice of the store
  // This will return the user object containing firstName, lastName and userId fields
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      {/*dispatching updateFirstName action to the User so that our state gets updated with the new first name we want to use*/}
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'N'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
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
      <FontAwesomeIcon icon={faSearch} color={'#25C0FF'} size={22} />
      <Search
        onSearch={value => {
          console.log(value);
        }}
        placeholder='Buscador'
      />
      <SingleDonationItem
        uri={
          'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
        }
        badgeTitle={'Environment'}
        donationTitle={'Tree Cactus'}
        price={44}
      />
    </SafeAreaView>
  );
}

export default Practice;
