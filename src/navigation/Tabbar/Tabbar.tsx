import React, {Component} from 'react';
import {Button, FooterTab, Icon, Text} from "native-base";

export default class TabBar extends Component {

    render() {
        return (
            <FooterTab style={{backgroundColor: "#000"}}>
                <Button vertical>
                    <Icon name="apps"/>
                    <Text>Apps</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera"/>
                    <Text>Camera</Text>
                </Button>
                <Button vertical active>
                    <Icon active name="navigate"/>
                    <Text>Navigate</Text>
                </Button>
                <Button vertical>
                    <Icon name="person"/>
                    <Text>Contact</Text>
                </Button>
            </FooterTab>
        )
    }
}
