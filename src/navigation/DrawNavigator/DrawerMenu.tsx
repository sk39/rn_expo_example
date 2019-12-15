import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DrawerContentComponentProps} from "react-navigation-drawer/src/types";
import {DisplayInTabScreens, OnlySideMenuScreens} from "../Routes";
import _ from "lodash";

export default class DrawerMenu extends Component<DrawerContentComponentProps> {

    jump(routeName) {
        const {navigation} = this.props;
        navigation.navigate(routeName);
        navigation.closeDrawer();
    }

    render() {
        return (
            <View style={styles.menu}>
                <View style={styles.logo}>
                    <Text>Examples scree menu</Text>
                </View>
                {_.map(DisplayInTabScreens, (info, key) => {
                    return (
                        <TouchableOpacity key={key}
                                          style={styles.item}
                                          onPress={() => this.jump(key)}>
                            <Text>{key}</Text>
                        </TouchableOpacity>
                    )
                })}
                {_.map(OnlySideMenuScreens, (info, key) => {
                    return (
                        <TouchableOpacity key={key}
                                          style={styles.item}
                                          onPress={() => this.jump(key)}>
                            <Text>{key}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

// TODO: color
const styles = StyleSheet.create({
    menu: {
        flex: 1,
        backgroundColor: "#fff"
    },
    logo: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
        paddingBottom: 30,
        backgroundColor: "#ddd"
    },
    item: {
        paddingHorizontal: 16,
        height: 50,
        alignItems: "flex-start",
        justifyContent: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
    }
});
