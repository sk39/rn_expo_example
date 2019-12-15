import React, {Component} from 'react';
import {Animated, Platform, StyleSheet} from 'react-native';
import {observer} from "mobx-react";
import {Button, Container, Text, View} from 'native-base';
import TabBarIcon from "../../navigation/TabNaviator/TabBarIcon";
import Logo from "@assets/logo.svg";
import * as WebBrowser from "expo-web-browser";
import Colors from "../../constants/Colors";
import {observable} from "mobx";

@observer
export default class HomeScreen extends Component<NavigationProps> {

    static navigationOptions = {
        title: 'Home',
        tabBarLabel: "Home",
        tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused}
                        name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            />
        )
    };

    @observable logoDegree = new Animated.Value(0);

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            () => {
                this.logoDegree.setValue(0);
                Animated.spring(this.logoDegree, {
                    toValue: 1,
                }).start();
            }
        );
    }

    handleLearnMorePress() {
        WebBrowser.openBrowserAsync(
            'https://docs.expo.io/versions/latest/workflow/development-mode/'
        );
    }

    render() {
        const {navigate} = this.props.navigation;
        const learnMoreButton = (
            <Text onPress={this.handleLearnMorePress.bind(this)}
                  style={styles.helpLinkText}>
                Learn more
            </Text>
        );

        const deg = this.logoDegree.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <Container style={styles.back}>
                <View style={{marginVertical: 40}}>
                    <Animated.View style={{transform: [{rotate: deg}]}}>
                        <Logo width={120} height={120}/>
                    </Animated.View>
                </View>
                <View style={{marginBottom: 40}}>
                    <Text style={styles.developmentModeText}>
                        Example projects to trial React Native (Expo) and ecosystem. {learnMoreButton}
                    </Text>
                </View>
                <Button block style={styles.btn}
                        onPress={() => navigate('Counter', {name: 'Jane'})}>
                    <Text>Counter</Text>
                </Button>
                <Button block style={styles.btn}
                        onPress={() => navigate('Settings')}>
                    <Text>Settings</Text>
                </Button>
                <Button block style={styles.btn}
                        onPress={() => navigate('Login')}>
                    <Text>Login</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
        backgroundColor: Colors.backColor
    },
    developmentModeText: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 18,
        lineHeight: 19,
        textAlign: 'center',
    },
    helpLinkText: {
        fontSize: 18,
        color: '#e4c6fc',
    },
    btn: {
        marginBottom: 16,
        backgroundColor: Colors.primaryColor
    }
});
