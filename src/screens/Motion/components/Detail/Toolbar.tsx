import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import translateAndOpacity from '../animations/translateAndOpacity';

class Toolbar extends PureComponent<any> {
    render() {
        const {onBackPress} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.statusBar}/>
                <TouchableWithoutFeedback onPress={onBackPress}>
                    <View>
                        <View style={styles.toolbarContainer}>
                            <View style={styles.backContainer}>
                                <Ionicons name="ios-arrow-back" size={24} color="white"/>
                                <Text style={styles.titleBackText}>Back</Text>
                            </View>
                            <View style={styles.menuIconContainer}>
                                <Feather name="share" size={24} color="white"/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    toolbarContainer: {
        height: 56,
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: "row"
    },
    statusBar: {
        height: 24,
        // backgroundColor: 'white',
    },
    titleBackText: {
        color: 'white',
        marginLeft: 8,
    },
    backContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row"
    },
    menuIconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default translateAndOpacity(Toolbar);
