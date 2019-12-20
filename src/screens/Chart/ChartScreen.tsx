import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {observer} from "mobx-react";
import {Container} from 'native-base';
import Colors from "../../constants/Colors";
import GradientLineExample from "./examples/GradientLineExample";
import AreaStackWithAxisExample from "./examples/AreaStackWithAxisExample";
import PieChartExample from "./examples/PieChartExample";
import AreaChartExample from "./examples/AreaChartExample";
import {Card} from "react-native-elements";
import {TabBarIcon} from "@common/components/ScreenIcon";

@observer
export default class ChartScreen extends Component<NavigationProps> {

    static navigationOptions = {
        tabBarLabel: "Chart",
        tabBarIcon: ({focused}) => (
            <TabBarIcon screenName="Chart" focused={focused}/>
        )
    };

    render() {
        return (
            <Container style={styles.container}>
                <ScrollView>
                    <Card containerStyle={styles.chartRow}>
                        <Text style={styles.chartRowTitle}>Pie Chart</Text>
                        <PieChartExample/>
                    </Card>
                    <Card containerStyle={styles.chartRow}>
                        <Text style={styles.chartRowTitle}>Gradient Line Chart</Text>
                        <GradientLineExample/>
                    </Card>
                    <Card containerStyle={styles.chartRow}>
                        <Text style={styles.chartRowTitle}>Area Chart</Text>
                        <AreaChartExample/>
                    </Card>
                    <Card containerStyle={styles.chartRow}>
                        <Text style={styles.chartRowTitle}>Area Stack Chart</Text>
                        <AreaStackWithAxisExample/>
                    </Card>
                    <View style={{paddingBottom: 24}}/>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        backgroundColor: Colors.backColor,
    },
    chartRow: {
        backgroundColor: Colors.cardBackColor,
        borderRadius: 5,
        borderColor: Colors.cardBorderColor,
        padding: 0,
    },
    chartRowTitle: {
        color: Colors.tabDefault,
        fontSize: 16,
        paddingVertical: 8,
        textAlign: "center"
    }
});
