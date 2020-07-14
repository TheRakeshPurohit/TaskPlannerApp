import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Activity
import HomeScreen from './screens/HomePage';
import ProjectPage from './screens/ProjectPage';
import TopBar from './screens/TopBar';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  ProjectPage: ProjectPage,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      TopBar: TopBar,
      ProjectPage: ProjectPage,
      //AppStack,
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
