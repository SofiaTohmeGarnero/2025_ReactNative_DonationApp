import {Image, Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../common/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
// Importing the useSelector hook from the React Redux library
// This hook allows us to select and retrieve data from the store
import {useAppDispatch, useAppSelector} from '../../redux/typehooks';
import { resetToInitialState, updateFirstName } from '../../redux/reducers/User';

function Home(): React.JSX.Element {

  // Using the useSelector hook to select the "user" slice of the store
  // This will return the user object containing firstName, lastName and userId fields
  const user = useAppSelector(state => state.user);
  const categories = useAppSelector(state => state.categories);
  const dispatch = useAppDispatch();
  console.log(categories)
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
     <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header
                title={user.firstName + ' ' + user.lastName[0] + '. 👋'}
              />
            </View>
          </View>
          <Image
            source={user.profileImage}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search onSearch={()=>{}} placeholder='Search'/>
        </View>
        <Pressable style={style.highlightedImageContainer} onPress={()=>dispatch(resetToInitialState())} >
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
