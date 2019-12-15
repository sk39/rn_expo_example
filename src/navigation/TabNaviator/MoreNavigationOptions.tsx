import React from "react";
import {Platform} from "react-native";
import TabBarIcon from "./TabBarIcon";

const MoreNavigationOptions = ({navigation}) => ({
    tabBarLabel: "More",
    tabBarIcon: ({focused, tintColor}) => (
        <TabBarIcon focused={focused}
                    name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                    color={tintColor}
        />
    ),
    tabBarOnPress: () => navigation.openDrawer()
});

export default MoreNavigationOptions;
