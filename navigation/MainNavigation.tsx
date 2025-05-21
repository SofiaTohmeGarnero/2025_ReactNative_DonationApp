import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Practice from '../screens/Practice/Practice';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Login}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Practice} component={Practice} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
