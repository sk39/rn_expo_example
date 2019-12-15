import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {observer} from "mobx-react";
import {Container, Text} from 'native-base';
import CounterStore from "./CounterStore";
import TabBarIcon from "../../navigation/TabNaviator/TabBarIcon";

@observer
export default class CounterScreen extends Component<NavigationProps> {

    static navigationOptions = {
        title: 'Counter Example',
        headerStyle: {
            backgroundColor: '#d7c959',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        tabBarLabel: "Counter",
        tabBarIcon: ({focused, tintColor}) => (
            <TabBarIcon
                focused={focused}
                color={tintColor}
                name={
                    Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle'
                }
            />
        )
    };

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
