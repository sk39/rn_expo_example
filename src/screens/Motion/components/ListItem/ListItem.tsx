import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {ScaleAndOpacity} from 'react-native-motion';

import Header from './Header';
import Content from './Content';
import {getPlatformElevation} from '@common/utils/getPlatformElevation';

interface Props {
    onPress?: Function;
    item: any;
    isDetail?: boolean;
    style?: any;
    isHidden?: boolean;
    animateOnDidMount?: boolean;
}

export default class ListItem extends Component<Props> {
    onPressed = event => {
        const {onPress, item} = this.props;
        onPress(item, event.nativeEvent);
    };

    render() {
        const {item, isDetail, style, isHidden, animateOnDidMount} = this.props;
        const {name, ...rest} = item;

        return (
            <ScaleAndOpacity
                isHidden={isHidden}
                animateOnDidMount={animateOnDidMount}
                duration={360}
            >
                <TouchableWithoutFeedback onPress={this.onPressed}>
                    <View style={[styles.container, style]} pointerEvents="box-only">
                        <Header name={name}/>
                        <Content isDetail {...rest} />
                    </View>
                </TouchableWithoutFeedback>
            </ScaleAndOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#48485f',
        marginHorizontal: 16,
        marginVertical: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        ...getPlatformElevation(10),
    },
});
