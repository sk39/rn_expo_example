import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CurrencyIcon from './CurrencyIcon';
import Colors from "../../../../constants/Colors";

interface Props {
    name: string;
}

export default class Header extends PureComponent<Props> {
    render() {
        const {name} = this.props;
        return (
            <View style={styles.container}>
                <CurrencyIcon name={name}/>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        alignItems: 'center',
        flexDirection: 'row',
    },
    nameContainer: {
        flex: 1,
        marginLeft: 14,
    },
    title: {
        color: Colors.fontColor,
        fontSize: 18,
        fontWeight: "700"
    }
});

