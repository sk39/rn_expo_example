import React, {Component} from "react";
import {Button} from "native-base";
import {ScreenIcon} from "@common/components/ScreenIcon";
import Colors from "../../constants/Colors";
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {StyleProp, Text, TextStyle, ViewStyle} from "react-native";

interface Props extends NavigationInjectedProps {
    screenName: string;
    btnStyle?: StyleProp<ViewStyle>;
    btnTextStyle?: StyleProp<TextStyle>;
    iconSize?: number;
    iconColor?: string;
}

class ScreenLinkButton extends Component<Props> {

    static defaultProps = {
        iconSize: 36,
        iconColor: Colors.primaryColor
    };

    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const {screenName, navigation} = this.props;
        navigation.navigate(screenName);
    }

    render() {
        const {screenName, btnStyle, btnTextStyle, iconSize, iconColor} = this.props;
        return (
            <Button block style={btnStyle} onPress={this.handlePress}>
                <ScreenIcon screenName={screenName} color={iconColor} size={iconSize}/>
                <Text style={btnTextStyle}>{screenName}</Text>
            </Button>
        )
    }
}

export default withNavigation(ScreenLinkButton);
