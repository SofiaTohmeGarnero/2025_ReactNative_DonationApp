import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Practice from '../screens/Practice/Practice';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{header: () => null, headerShown: false}}
        initialRouteName={Routes.Home}
      >
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Practice} component={Practice} />
      </Stack.Navigator>
    );
  };

  export default MainNavigation;
