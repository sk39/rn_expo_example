import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "native-base";
import Colors from "../../constants/Colors";

function FirstScreen(props) {
    const {navigate} = props.navigation;

    return (
        <View style={styles.back}>
            <Text style={styles.number}>1</Text>
            <View style={styles.row}>
                <Button block style={styles.btn}
                        onPress={() => navigate('InnerRouteSecond')}>
                    <Text style={styles.btnText}>Next</Text>
                </Button>
            </View>
        </View>
    );
}

FirstScreen.navigationOptions = {
    title: 'First Screen',
    headerBackTitle: "First"
};

function SecondScreen(props) {
    const {navigate, goBack} = props.navigation;

    return (
        <View style={styles.back}>
            <Text style={styles.number}>2</Text>
            <View style={styles.row}>
                <Button block style={styles.btn}
                        onPress={() => goBack()}>
                    <Text style={styles.btnText}>Back</Text>
                </Button>
                <Button block style={styles.btn}
                        onPress={() => navigate('InnerRouteThird')}>
                    <Text style={styles.btnText}>Next</Text>
                </Button>
            </View>
        </View>
    );
}

SecondScreen.navigationOptions = {
    title: 'Second Screen',
    headerBackTitle: "Second"
};

function ThirdScreen(props) {
    return (
        <View style={styles.back}>
            <Text style={styles.number}>3</Text>
            <View style={styles.row}>
                <Button block style={styles.btn}
                        onPress={() => props.navigation.goBack()}>
                    <Text style={styles.btnText}>Back</Text>
                </Button>
                <Button block style={styles.btn}
                        onPress={() => props.navigation.popToTop()}>
                    <Text style={styles.btnText}>Back to top</Text>
                </Button>
            </View>
        </View>
    );
}

ThirdScreen.navigationOptions = {
    title: 'Third Screen',
    headerBackTitle: "Third"
};

export default createStackNavigator({
    InnerRouteFirst: FirstScreen,
    InnerRouteSecond: SecondScreen,
    InnerRouteThird: ThirdScreen
}, {
    cardStyle: {backgroundColor: Colors.tabBar},
    defaultNavigationOptions: {
        headerTintColor: '#a0a1ba',
        headerPressColorAndroid: Colors.primaryColor,
        headerStyle: {backgroundColor: Colors.tabBar},
        headerTitleStyle: {color: '#a0a1ba'}
    }
})

const styles = StyleSheet.create({
    back: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 6,
        paddingVertical: 24,
        backgroundColor: Colors.backColor
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        fontSize: 80,
        paddingBottom: 40,
        color: Colors.tabDefault,

    },
    btn: {
        backgroundColor: "rgb(67,67,85)",
        // width: 200,
        flex: 1,
        margin: 16,
        height: 100,
        // ...getPlatformElevation(20),
    },
    btnText: {
        fontSize: 20,
        color: Colors.tabDefault
    }
});
