import {Icon} from "react-native-elements";
import React from "react";
import Icons from "../../constants/Icons";
import Colors from "../../constants/Colors";

export function ScreenIcon(props) {
    const {screenName, color, size} = props;
    const def = Icons[screenName] || Icons["Default"];
    return (
        <Icon name={def.name}
              type={def.type}
              color={color}
              size={size}/>
    )
}


export function TabBarIcon(props) {
    const {screenName, focused} = props;
    return (
        <ScreenIcon screenName={screenName}
                    color={focused ? Colors.tabSelected : Colors.tabDefault}
                    size={22}/>
    )
}

