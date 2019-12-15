import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";
import LottieView from "lottie-react-native";
import Colors from "../../constants/Colors";

export default class LottieScreen extends React.Component {

    private animation: any;

    constructor(props) {
        super(props);
        this.playAnimation = this.playAnimation.bind(this);
    }

    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
    }

    playAnimation() {
        this.animation.play();
    };

    render() {
        return (
            <View style={styles.animationContainer}>
                <LottieView
                    loop={false}
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 320,
                        height: 320,
                    }}
                    source={require('@sk39/lottie-files/dist/error-icon.json')}
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
    },
    buttonContainer: {
        paddingTop: 20,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#444',
        width: 256,
    }
});
