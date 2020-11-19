import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2176062Navigator from '../features/BlankScreen2176062/navigator';
import BlankScreen1176061Navigator from '../features/BlankScreen1176061/navigator';
import BlankScreen0176060Navigator from '../features/BlankScreen0176060/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2176062: { screen: BlankScreen2176062Navigator },
BlankScreen1176061: { screen: BlankScreen1176061Navigator },
BlankScreen0176060: { screen: BlankScreen0176060Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
