import React, {Component} from "react";
import {Platform, StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";
import LottieView from "lottie-react-native";
import Colors from "../../constants/Colors";
import ExternalLink from "@common/components/ExternalLink";

interface Props {
    source: string | { uri: string };
    newJsonType?: boolean;
}

export default class LottieViewItem extends Component<Props> {

    private animation;

    constructor(props) {
        super(props);
        this.playAnimation = this.playAnimation.bind(this);
    }

    playAnimation() {
        this.animation.play();
    };

    render() {
        if (this.props.newJsonType && Platform.OS === "android") {
            return (
                <View style={styles.animationContainer}>
                    <Text style={{color: "#f1f1f1", fontSize: 20}}>
                        [Android] Latest lottie 3 format which is not supported by lottie-react-native at this
                        moment.&nbsp;
                        <ExternalLink url={"https://github.com/expo/expo/issues/4835"}
                                      text="Detail."
                                      style={styles.helpLinkText}/>
                    </Text>
                </View>
            )
        }
        return (
            <View style={styles.animationContainer}>
                <LottieView
                    loop={false}
                    ref={animation => this.animation = animation}
                    style={{
                        width: 260,
                        height: 260,
                    }}
                    source={this.props.source}
                    // OR find more Lottie files @ https://lottiefiles.com/featured
                    // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                />
                <View style={styles.buttonContainer}>
                    <Button style={styles.btn}
                            onPress={this.playAnimation}>
                        <Text>Play</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: Colors.backColor,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 20
    },
    buttonContainer: {
        paddingTop: 20,
    },
    helpLinkText: {
        color: Colors.linkColor,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#444',
        width: 256,
    }
});
