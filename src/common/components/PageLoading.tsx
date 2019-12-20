import React, {Component} from "react";
import {ActivityIndicator, Modal, StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";

interface Props {
    loading?: boolean,
    indicatorColor?: string,
    indicatorBackgroundColor?: string,
    disablesLayerBackgroundColor?: string,
}

export default class PageLoading extends Component<Props> {

    static defaultProps = {
        loading: false,
        indicatorColor: Colors.primaryColor,
        indicatorBackgroundColor: "#fff",
        disablesLayerBackgroundColor: Colors.disablesLayer
    };

    render() {
        const {loading, indicatorColor, indicatorBackgroundColor, disablesLayerBackgroundColor} = this.props;
        return (
            <Modal transparent
                   animationType="none"
                   visible={loading}
                   onRequestClose={() => null}>
                <View style={[
                    styles.disablesLayer,
                    {backgroundColor: disablesLayerBackgroundColor}
                ]}>
                    <View style={[
                        styles.indicatorWrapper,
                        {backgroundColor: indicatorBackgroundColor}
                    ]}>
                        <ActivityIndicator animating={loading}
                                           color={indicatorColor}
                                           size="large"/>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    disablesLayer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    indicatorWrapper: {
        height: 100,
        width: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});
