import React, {Component} from 'react';
import {Animated, Easing, InteractionManager, StyleSheet, Text} from 'react-native';

interface Props {
    isHidden: boolean;
    backgroundColor: string;
    title: string;
    delay?: number;
}

interface State {
    translateY: any;
}

export default class Button extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            translateY: new Animated.Value(112),
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions().then(() => {
            this.showAnimation(this.props);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.isHidden && this.props.isHidden) {
            this.hideAnimation(this.props);
        }
    }

    showAnimation(props) {
        Animated.timing(this.state.translateY, {
            easing: Easing.out(Easing.back()),
            toValue: 0,
            delay: props.delay,
        }).start();
    }

    hideAnimation(props) {
        Animated.timing(this.state.translateY, {
            easing: Easing.in(Easing.back()),
            toValue: 112,
            delay: props.delay,
        }).start();
    }

    render() {
        const {backgroundColor, title} = this.props;
        const {translateY} = this.state;

        const animationStyle = {
            transform: [{translateY}],
        };

        return (
            <Animated.View
                style={[styles.iconContainer, {backgroundColor}, animationStyle]}
            >
                <Text style={{color: "#fff"}}>{title}</Text>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 160,
        height: 44,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
