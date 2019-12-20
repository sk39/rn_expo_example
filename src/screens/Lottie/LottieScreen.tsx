import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Container, Tab, Tabs} from "native-base";
import LottieViewItem from "./LottieViewItem";
import Colors from "../../constants/Colors";
import {createStackNavigator} from "react-navigation-stack";

class LottieScreen extends Component {

    static navigationOptions = {
        title: 'Lottie Examples',
        headerStyle: {backgroundColor: Colors.tabBar},
        headerTitleStyle: {color: '#a0a1ba'}
    };

    render() {
        return (
            <Container style={{backgroundColor: Colors.backColor, paddingBottom: 30}}>
                <Tabs tabBarUnderlineStyle={{backgroundColor: Colors.linkColor}}>
                    {[
                        require("@sk39/lottie-files/dist/error-icon.json"),
                        require('@sk39/lottie-files/dist/error-icon2.json'),
                        require('@sk39/lottie-files/dist/error-icon-bounce.json'),
                        require('@sk39/lottie-files/dist/success-icon.json'),
                        require('@sk39/lottie-files/dist/success-icon-bounce.json')
                    ].map((source, index) => {
                        return (
                            <Tab key={index}
                                 tabStyle={styles.tab}
                                 textStyle={styles.tabText}
                                 activeTabStyle={styles.activeTab}
                                 activeTextStyle={styles.activeTabText}
                                 heading={`Tab${index + 1}`}>
                                <LottieViewItem
                                    newJsonType={index >= 3}
                                    source={source}/>
                            </Tab>
                        )
                    })}
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: Colors.tabBar,
    },
    tabText: {
        color: "#888"
    },
    activeTab: {
        backgroundColor: Colors.tabBar
    },
    activeTabText: {
        color: Colors.linkColor
    }
});


export default createStackNavigator({Lott22ie: LottieScreen});
