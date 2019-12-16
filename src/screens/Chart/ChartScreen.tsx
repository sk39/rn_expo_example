import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from "mobx-react";
import {Container} from 'native-base';
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import GradientLineExample from "./examples/GradientLineExample";
import AreaStackWithAxisExample from "./examples/AreaStackWithAxisExample";
import PieChartWithCenteredLabels from "./examples/PieChartWithCenteredLabels";

@observer
export default class ChartScreen extends Component<NavigationProps> {


    render() {
        return (
            <Container style={styles.container}>
                <ScrollView>
                    <View style={styles.chartRow}>
                        <Text style={styles.chartRowTitle}>PieChartWithCenteredLabels</Text>
                        <PieChartWithCenteredLabels/>
                    </View>
                    <View style={styles.chartRow}>
                        <Text style={styles.chartRowTitle}>GradientLineExample</Text>
                        <GradientLineExample/>
                    </View>
                    <View style={styles.chartRow}>
                        <Text style={styles.chartRowTitle}>AreaStackWithAxisExample</Text>
                        <AreaStackWithAxisExample/>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.backColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chartRow: {
        width: Layout.window.width - 16,
        marginTop: 40
    },
    chartRowTitle: {
        color: Colors.tabDefault,
        fontSize: 18,
        paddingBottom: 4
    }
});
