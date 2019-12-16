import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
    balance: string;
    price: string;
    coin: string;
}

export default class Content extends Component<Props> {
    render() {
        const {balance, price, coin} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.cellContainer}>
                    <Text style={styles.titleText}>Balance</Text>
                    <Text style={styles.valueText}>{balance}</Text>
                </View>
                <View style={styles.cellContainer}>
                    <Text style={styles.titleText}>Coin</Text>
                    <Text style={styles.valueText}>{coin}</Text>
                </View>
                <View style={styles.cellContainer}>
                    <Text style={styles.titleText}>Price</Text>
                    <Text style={styles.valueText}>{price}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 12,
        color: 'gray'
    },
    valueText: {
        fontSize: 16,
        fontWeight: '900',
        color: "#f1f1f1"
    }
});

