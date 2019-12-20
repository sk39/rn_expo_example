import React, {Component} from 'react';
import {Animated} from 'react-native';
import {observer} from "mobx-react";
import Logo from "@assets/logo.svg";
import {observable} from "mobx";

@observer
export default class HomeLogo extends Component<NavigationProps> {

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

    render() {
        const deg = this.logoDegree.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <Animated.View style={{transform: [{rotate: deg}]}}>
                <Logo width={96} height={96}/>
            </Animated.View>
        );
    }
}


