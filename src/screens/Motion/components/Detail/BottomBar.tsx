import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';

interface Props {
    isHidden: boolean;
}

export default class BottomButtons extends PureComponent<Props> {
    render() {
        const {isHidden} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.flexContainer}>
                    <Button
                        isHidden={isHidden}
                        title="Sell"
                        backgroundColor="#505e85"
                    />
                </View>
                <View style={styles.flexContainer}>
                    <Button
                        isHidden={isHidden}
                        title="Buy"
                        backgroundColor="#cc4151"
                        delay={125}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 100,
        marginHorizontal: 16,
    },
    flexContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // color:"#505e85"
        // color:"#cc4151"
    },
});

