import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen39576Navigator from '../features/BlankScreen39576/navigator';
import BlankScreen19575Navigator from '../features/BlankScreen19575/navigator';
import BlankScreen29574Navigator from '../features/BlankScreen29574/navigator';
import BlankScreen39573Navigator from '../features/BlankScreen39573/navigator';
import BlankScreen19572Navigator from '../features/BlankScreen19572/navigator';
import BlankScreen29571Navigator from '../features/BlankScreen29571/navigator';
import CopyOfBlankScreen29569Navigator from '../features/CopyOfBlankScreen29569/navigator';
import BlankScreen19568Navigator from '../features/BlankScreen19568/navigator';
import BlankScreen29567Navigator from '../features/BlankScreen29567/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen39576: { screen: BlankScreen39576Navigator },
BlankScreen19575: { screen: BlankScreen19575Navigator },
BlankScreen29574: { screen: BlankScreen29574Navigator },
BlankScreen39573: { screen: BlankScreen39573Navigator },
BlankScreen19572: { screen: BlankScreen19572Navigator },
BlankScreen29571: { screen: BlankScreen29571Navigator },
CopyOfBlankScreen29569: { screen: CopyOfBlankScreen29569Navigator },
BlankScreen19568: { screen: BlankScreen19568Navigator },
BlankScreen29567: { screen: BlankScreen29567Navigator },

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
