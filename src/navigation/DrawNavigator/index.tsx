import {createDrawerNavigator} from 'react-navigation-drawer';
import DrawerMenu from "./DrawerMenu";
import TabNavigator from "../TabNaviator/TabNaviator";

const DrawNavigator = createDrawerNavigator(
    {
        Tab: TabNavigator
    },
    {
        drawerPosition: "right",
        hideStatusBar: true,
        contentComponent: DrawerMenu
    }
);

export default DrawNavigator;
