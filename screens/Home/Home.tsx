import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import globalStyle from '../../common/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
// Importing the useSelector hook from the React Redux library
// This hook allows us to select and retrieve data from the store
import {useAppDispatch, useAppSelector} from '../../redux/typehooks';
import {resetToInitialState, updateFirstName} from '../../redux/reducers/User';
import {
  Category,
  updateSelectedCategoryId,
} from '../../redux/reducers/Categories';
import {updateSelectedDonationId} from '../../redux/reducers/Donations';
import Tab from '../../components/Tab/Tab';
import {useEffect, useState} from 'react';
import {Donation} from '../../redux/reducers/Donations';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {RootStackParamList, Routes} from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

function Home(): React.JSX.Element {

  type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<NavigationProp>();

  // Using the useSelector hook to select the "user" slice of the store
  // This will return the user object containing firstName, lastName and userId fields
  const user = useAppSelector(state => state.user);
  const categories = useAppSelector(state => state.categories);
  const donations = useAppSelector(state => state.donations);
  const dispatch = useAppDispatch();

  const [donationItems, setDonationItems] = useState<Donation[]>([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (
    items: Category[],
    pageNumber: number,
    pageSize: number,
  ) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

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
          <Search onSearch={() => {}} placeholder="Search" />
        </View>
        <Pressable
          style={style.highlightedImageContainer}
          onPress={() => dispatch(resetToInitialState())}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              console.log(
                'User has reached the end and we are getting more data for page number ',
                categoryPage,
              );
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationItemsContainer}>
            {donationItems.map(value => (
              <SingleDonationItem
                onPress={selectedDonationId => {
                  dispatch(updateSelectedDonationId(selectedDonationId));
                  navigation.navigate(Routes.SingleDonationItem);
                }}
                donationItemId={value.donationItemId}
                uri={value.image}
                donationTitle={value.name}
                badgeTitle={
                  categories.categories.filter(
                    val => val.categoryId === categories.selectedCategoryId,
                  )[0].name
                }
                key={value.donationItemId}
                price={parseFloat(value.price)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
