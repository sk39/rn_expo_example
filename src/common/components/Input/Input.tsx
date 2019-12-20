import React, {PureComponent} from "react";
import {IconNode, Input as ElInput} from "react-native-elements";
import {StyleSheet} from "react-native";
import InputState from "./InputState";
import {observer} from "mobx-react";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

interface Props {
    inputState: InputState,
    label: string;
    secureTextEntry?: boolean;
    leftIcon?: IconNode;
}

@observer
export default class Input extends PureComponent<Props> {
    render() {
        const {inputState, label, secureTextEntry, leftIcon} = this.props;
        return (
            <ElInput inputStyle={styles.input}
                     label={label}
                     selectionColor={Colors.primaryColor}
                     leftIcon={leftIcon}
                     containerStyle={styles.inputContainer}
                     secureTextEntry={secureTextEntry}
                     errorStyle={styles.inputError}
                     errorMessage={inputState.errorMsg}
                     onChangeText={(v) => inputState.setValue(v)}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        color: Colors.fontColor,
        paddingLeft: 16
    },
    inputContainer: {
        width: Layout.input.width,
        paddingBottom: 24
    },
    inputError: {
        position: "absolute",
        bottom: 0,
        left: 12,
        color: "orangered"
    }
});
