import React, {Component} from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DrawerContentComponentProps} from "react-navigation-drawer/src/types";
import {DisplayInTabScreens, OnlySideMenuScreens} from "../Routes";
import _ from "lodash";
import {ScreenIcon} from "@common/components/ScreenIcon";
import Colors from "../../constants/Colors";

export default class DrawerMenu extends Component<DrawerContentComponentProps> {

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    jump(routeName) {
        const {navigation} = this.props;
        navigation.navigate(routeName);
        navigation.closeDrawer();
    }

    renderItem(component, key) {
        return (
            <TouchableOpacity key={key}
                              style={styles.item}
                              onPress={() => this.jump(key)}>
                <ScreenIcon screenName={key} color={styles.icon.color} size={22}/>
                <Text style={styles.itemText}>{key}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ImageBackground source={require("@assets/sideMenu.png")}
                             style={styles.menu}>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>Examples</Text>
                </View>
                {this.renderItem(null, "Login")}
                {_.map(DisplayInTabScreens, this.renderItem)}
                {_.map(OnlySideMenuScreens, this.renderItem)}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: '100%',
        backgroundColor: "#000"
    },
    logo: {
        paddingVertical: 24,
        marginTop: 12,
        alignItems: "center",
    },
    logoText: {
        color: "#302f3f",
        fontWeight: "700",
        fontSize: 26,
    },
    item: {
        paddingLeft: 22,
        height: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    itemText: {
        color: Colors.fontColor,
        fontSize: 20,
        marginLeft: 16,
        paddingBottom: 2
    },
    icon: {
        color: Colors.tabSelected
    }
});
