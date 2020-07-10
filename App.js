import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Activity
import HomeScreen from './screens/HomePage';

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      //AppStack,
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
