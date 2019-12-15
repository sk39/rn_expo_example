import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {DisplayInTabScreens, OnlySideMenuScreens} from "../Routes";
import MoreNavigationOptions from "./MoreNavigationOptions";
import {createSwitchNavigator} from "react-navigation";
import Colors from "../../constants/Colors";

const TabNavigator = createBottomTabNavigator(
    {
        ...DisplayInTabScreens,
        More: {
            screen: createSwitchNavigator(OnlySideMenuScreens, {
                defaultNavigationOptions: {
                    headerShown: true
                }
            }),
            navigationOptions: MoreNavigationOptions
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.tabSelected,
            style: {
                borderTopColor: Colors.tabBar,
                backgroundColor: Colors.tabBar,
            }
        }
    }
);

export default TabNavigator;
