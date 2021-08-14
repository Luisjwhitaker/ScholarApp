import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import LobbyScreen from './screens/LobbyScreen';
import RegisterScreen from './screens/RegisterScreen';
import LogActivityScreen from './screens/LogActivityScreen';
import PreviousLogsScreen from './screens/PreviousLogsScreen';

const screens = {
  LoginScreen: {
    screen: LoginScreen
  },
  LobbyScreen: {
    screen: LobbyScreen
  },
  RegisterScreen: {
    screen: RegisterScreen
  },
  LogActivityScreen: {
    screen: LogActivityScreen
  },
  PreviousLogsScreen: {
    screen: PreviousLogsScreen
  },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
