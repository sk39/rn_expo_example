import React from "react";
import {TabBarIcon} from "@common/components/ScreenIcon";

const MoreNavigationOptions = ({navigation}) => ({
    tabBarLabel: "More",
    tabBarIcon: ({focused}) => (
        <TabBarIcon screenName="More" focused={focused}/>
    ),
    tabBarOnPress: () => navigation.openDrawer()
});

export default MoreNavigationOptions;
