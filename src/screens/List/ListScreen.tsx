import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Body, Container, Content, Icon, List, ListItem, Right, Text} from 'native-base';
import ListStore from "./ListStore";
import {StyleSheet} from 'react-native';

@observer
export default class ListScreen extends Component {

    static navigationOptions = {
        title: 'List Example',
        headerStyle: {
            backgroundColor: '#c8bdd3',
        },
        headerTintColor: '#363458',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    store: ListStore = new ListStore();

    componentDidMount() {
        this.store.createDummyData();
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={this.store.list}
                        keyExtractor={(item, index) => item.name}
                        renderRow={item => (
                            <ListItem
                                key={item.name}
                                button
                                onPress={() => alert(`onPress ${item.name}`)}>
                                <Body>
                                    <Text>{item.name}</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>
                        )}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1eaff',
    },
});
