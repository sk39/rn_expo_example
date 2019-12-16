import React, {PureComponent} from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View,} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import translateAndOpacity from '../animations/translateAndOpacity';
import {Icon} from "react-native-elements";
import Colors from "../../../../constants/Colors";

class Toolbar extends PureComponent<any, any> {
    renderDetail() {
        const {opacityValue, translateY} = this.state;
        const {onBackPress} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.statusBar}/>
                <TouchableWithoutFeedback onPress={onBackPress}>
                    <Animated.View>
                        <View style={styles.toolbarContainer}>
                            <View style={styles.backContainer}>
                                <Ionicons name="ios-arrow-back" size={24} color="white"/>
                                <Text style={styles.titleBackText}>Back</Text>
                            </View>
                            <View style={styles.menuIconContainer}>
                                <Feather name="share" size={24} color="white"/>
                            </View>
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar}/>
                <View>
                    <View style={styles.toolbarContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Motion Example</Text>
                        </View>
                        <View style={styles.menuIconContainer}>
                            <Icon name='search' type="feather" color={Colors.tabDefault} size={24}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    toolbarContainer: {
        height: 56,
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: "row"
    },
    titleContainer: {
        flex: 1,
    },
    toolbarBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 150
    },
    statusBar: {
        height: 24,
        backgroundColor: Colors.backColor,
    },
    titleBackText: {
        color: 'white',
        marginLeft: 8,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '900',
        color: Colors.tabDefault,
    },
    backContainer: {
        flex: 1,
        alignItems: 'center',
    },
    menuIconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default translateAndOpacity(Toolbar);
