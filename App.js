import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Activity
import HomeScreen from './screens/HomePage';
import ProjectPage from './screens/ProjectPage';
import TopBar from './screens/TopBar';
import AddTask from './screens/AddTask';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  ProjectPage: ProjectPage,
  AddTask: AddTask,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      //TopBar: TopBar,
      ProjectPage: ProjectPage,
      AddTask: AddTask,
      //AppStack,
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
