import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LandingNavigator from './land-navigator';
import createBottomTabNavigator from './app-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Land: LandingNavigator,
    App: createBottomTabNavigator,
  },
  {
    initialRouteName: 'Land',
  },
);

export default createAppContainer(RootNavigator);
