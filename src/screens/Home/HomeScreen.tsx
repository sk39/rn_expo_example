import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {observer} from "mobx-react";
import {Container, Text, View} from 'native-base';
import {TabBarIcon} from "@common/components/ScreenIcon";
import Colors from "../../constants/Colors";
import HomeLogo from "./HomeLogo";
import ExternalLink from "@common/components/ExternalLink";
import HomeLinkButton from "./HomeLinkButton";

@observer
export default class HomeScreen extends Component<NavigationProps> {

    static navigationOptions = {
        tabBarLabel: "Home",
        tabBarIcon: ({focused}) => (
            <TabBarIcon screenName="Home" focused={focused}/>
        )
    };

    render() {
        const {navigation} = this.props;
        const helpUrl = 'https://docs.expo.io/versions/latest/workflow/development-mode/';
        const delay = 126;
        return (
            <Container style={styles.back}>
                <View style={{marginTop: 48, marginBottom: 36}}>
                    <HomeLogo navigation={this.props.navigation}/>
                </View>
                <View style={{marginBottom: 24}}>
                    <Text style={styles.developmentModeText}>
                        Example projects to trial React Native (Expo) and ecosystem.&nbsp;
                        <ExternalLink url={helpUrl}
                                      text="Learn more"
                                      style={styles.helpLinkText}/>
                    </Text>
                </View>
                <View style={styles.tileRow}>
                    <HomeLinkButton screenName="Login" delay={delay} navigation={navigation}/>
                    <HomeLinkButton screenName="Motion" delay={delay * 2} navigation={navigation}/>
                </View>
                <View style={styles.tileRow}>
                    <HomeLinkButton screenName="Chart" delay={delay * 3} navigation={navigation}/>
                    <HomeLinkButton screenName="Settings" delay={delay * 4} navigation={navigation}/>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        alignItems: 'center',
        padding: 6,
        paddingVertical: 24,
        backgroundColor: Colors.backColor
    },
    developmentModeText: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 18,
        lineHeight: 19,
        paddingHorizontal: 8,
        textAlign: 'left'
    },
    helpLinkText: {
        fontSize: 18,
        color: Colors.linkColor,
    },
    tileRow: {
        flex: 1,
        flexDirection: "row"
    }
});
