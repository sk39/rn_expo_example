import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {observer} from "mobx-react";
import {Container, Text} from 'native-base';
import CounterStore from "./CounterStore";

@observer
export default class CounterScreen extends Component<NavigationProps> {

    store: CounterStore = new CounterStore();

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            payload => {
                this.store.startCount();
            }
        );
        this.props.navigation.addListener(
            'willBlur',
            payload => {
                this.store.stopCount();
            }
        );
    }

    render() {
        return (
            <Container style={styles.container}>
                <Text style={{fontSize: 80}}>{this.store.counter}</Text>
                <Text style={{fontSize: 20}}>{this.store.currentDate()}</Text>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff8',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 32,
    },
});
