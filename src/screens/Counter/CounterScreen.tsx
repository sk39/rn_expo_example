import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {observer} from "mobx-react";
import {Container, Text} from 'native-base';
import CounterStore from "./CounterStore";

@observer
export default class CounterScreen extends Component {

    static navigationOptions = {
        title: 'Counter Example',
        headerStyle: {
            backgroundColor: '#d7c959',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    store: CounterStore = new CounterStore();

    componentDidMount() {
        this.store.startCount();
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
