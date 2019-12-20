import React, {Component} from "react";
import {StyleProp, Text, TextStyle} from "react-native";
import * as WebBrowser from "expo-web-browser";

interface Props {
    url: string;
    text: string;
    style?: StyleProp<TextStyle>;
}

export default class ExternalLink extends Component<Props> {

    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const {url} = this.props;
        WebBrowser.openBrowserAsync(url);
    }

    render() {
        const {style, text} = this.props;
        return (
            <Text onPress={this.handlePress} style={style}>
                {text}
            </Text>
        )
    }
}

