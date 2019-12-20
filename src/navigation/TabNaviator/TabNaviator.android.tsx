import React from "react";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createSwitchNavigator} from "react-navigation";
import {DisplayInTabScreens, OnlySideMenuScreens} from "../Routes";
import MoreNavigationOptions from "./MoreNavigationOptions";
import Colors from "../../constants/Colors";

const TabNavigator = createMaterialBottomTabNavigator(
    {
        ...DisplayInTabScreens,
        More: {
            screen: createSwitchNavigator(OnlySideMenuScreens),
            navigationOptions: MoreNavigationOptions
        }
    },
    {
        activeColor: Colors.tabSelected,
        shifting: false,
        barStyle: {
            backgroundColor: Colors.tabBar
        }
    }
);

export default TabNavigator;
