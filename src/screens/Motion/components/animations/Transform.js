import React, {PureComponent} from 'react';
import {Animated, Easing, StyleSheet, View,} from 'react-native';

import {ListItem} from '../components';

class Detail extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            topValue: new Animated.Value(props.startPosition.pageY),
        };
    }

    componentDidMount() {
        this.moveItemToTop();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.phase !== 'phase-3' && this.props.phase === 'phase-3') {
            this.moveItemBack();
        }
    }

    moveItemToTop = () => {
        const {onMoveDetailAnimationEnd} = this.props;

        Animated.timing(this.state.topValue, {
            easing: Easing.in(Easing.back()),
            toValue: 80,
            duration: 300,
        }).start(onMoveDetailAnimationEnd);
    };
    moveItemBack = () => {
        const {onMoveBackAnimationEnd, startPosition} = this.props;

        Animated.timing(this.state.topValue, {
            easing: Easing.in(Easing.back()),
            toValue: startPosition.pageY,
            duration: 300,
        }).start(onMoveBackAnimationEnd);
    };
    onBackPressed = () => {
        this.setState({selected: null});
    };

    render() {
        const {topValue} = this.state;
        const {selectedItem, startPosition} = this.props;

        return (
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.positionContainer,
                        {
                            top: topValue,
                            width: startPosition.width,
                        },
                    ]}
                >
                    <ListItem item={selectedItem} onPress={() => {
                    }}/>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
    },
    positionContainer: {
        position: 'absolute',
    },
});

export default Detail;
