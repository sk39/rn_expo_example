import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {observer} from "mobx-react";
import {Button, Container, Footer, Icon, Text} from 'native-base';
import {LinearGradient} from "expo-linear-gradient";
import TabBar from "../../navigation/Tabbar/Tabbar";

interface Props {
    navigation: any,
}

@observer
export default class HomeScreen extends Component<Props> {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: () => (
            <Button transparent light
                    onPress={() => alert('This is a button!')}>
                <Icon name='settings' type="Feather"/>
            </Button>
        ),
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <LinearGradient
                    colors={['#24262a', '#101113']}
                    start={[0.4, 0.1]}
                    end={[1, 1]}
                    style={styles.back}>
                    <Button block style={styles.btn}
                            onPress={() => navigate('Counter', {name: 'Jane'})}>
                        <Text>Counter</Text>
                    </Button>
                    <Button block style={styles.btn}
                            onPress={() => navigate('List')}>
                        <Text>List</Text>
                    </Button>
                    <Button block style={styles.btn}
                            onPress={() => navigate('Login')}>
                        <Text>Login</Text>
                    </Button>
                </LinearGradient>
                <Footer style={styles.footer}>
                   <TabBar/>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    btn: {
        marginBottom: 16,
        backgroundColor: '#a376c2',
        borderRadius: 26,
    },
    footer: {
        backgroundColor: "#000"
    }
});
