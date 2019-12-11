import React from 'react';
import 'react-native-gesture-handler';
import {AppLoading} from "expo";
import * as Font from 'expo-font';
import {Feather, Ionicons} from '@expo/vector-icons';
import {observable} from "mobx";
import {observer} from "mobx-react";
import RootStack from "./src/screens/RootStack";
import {createAppContainer} from "react-navigation";

const AppContainer = createAppContainer(RootStack);

@observer
export default class App extends React.Component {

    @observable isReady: boolean = false;

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Feather.font,
            ...Ionicons.font,
        });
        this.isReady = true;
    }

    render() {
        if (!this.isReady) {
            return <AppLoading/>;
        }

        return <AppContainer/>;
    }
}
