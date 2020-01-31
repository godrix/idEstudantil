import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import Main from './pages/Main';
import Profile from './pages/Profile';

export default () =>
  createAppContainer(
    createBottomTabNavigator(
      {
        Main,
        Profile,
      },
      {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#FFF',
          inactiveTintColor: 'rgba(255,255,255,0.6)',
          style: {
            backgroundColor: '#273555',
          },
        },
      },
    ),
  );
