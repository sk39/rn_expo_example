import React, {Component} from "react";
import {Input as ElInput} from "react-native-elements";
import {StyleSheet} from "react-native";
import InputState from "./InputState";
import {observer} from "mobx-react";

interface Props {
    inputState: InputState,
    label: string;
    secureTextEntry?: boolean;
    leftIcon?: any // TODO:
}

@observer
export default class Input extends Component<Props> {
    render() {
        const {inputState, label, secureTextEntry, leftIcon} = this.props;
        return (
            <ElInput inputStyle={styles.input}
                     label={label}
                     selectionColor='#a376c2'
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

// TODO: Define color
const styles = StyleSheet.create({
    input: {
        color: '#f1f1f1',
        paddingLeft: 16
    },
    inputContainer: {
        width: 300, // TODO: auto
        paddingBottom: 24
    },
    inputError: {
        position: "absolute",
        bottom: 0,
        left: 12,
        color: "orangered"
    }
});
