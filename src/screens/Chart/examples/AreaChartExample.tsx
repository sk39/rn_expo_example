import React, {Component} from 'react'
import {AreaChart, Path} from 'react-native-svg-charts'
import {Defs, LinearGradient, Stop} from 'react-native-svg'
import * as shape from 'd3-shape'
import {StyleSheet, View} from 'react-native'

export default class AreaChartExample extends Component {

    render() {
        const data = [76, 99, 73, 96, 60, 78, 76, 84];
        const data2 = [64, 30, 70, 57, 73, 20, 40, 14];
        const Gradient = () => (
            <Defs key={"gradient"}>
                <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(174,76,168)'} stopOpacity={0.2}/>
                    <Stop offset={'100%'} stopColor={'rgb(174,76,168)'} stopOpacity={0}/>
                </LinearGradient>
            </Defs>
        );

        const Line1: any = ({line}) => (
            <Path key={'line'} d={line} stroke={'rgba(174,76,168,0.6)'} fill={'none'}/>
        );

        const Gradient2 = () => (
            <Defs key={"gradient"}>
                <LinearGradient id={'gradient2'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(32,235,255)'} stopOpacity={0.3}/>
                    <Stop offset={'100%'} stopColor={'rgb(86,222,255)'} stopOpacity={0}/>
                </LinearGradient>
            </Defs>
        );

        const Line2: any = ({line}) => (
            <Path key={'line'} d={line} stroke={'rgba(32,235,255,0.7)'} fill={'none'}/>
        );

        return (
            <View style={{height: 200}}>
                <AreaChart
                    style={{flex: 1}}
                    data={data}
                    contentInset={{top: 10, bottom: 0}}
                    svg={{fill: 'url(#gradient)'}}
                    curve={shape.curveNatural}
                    yMax={100}
                    yMin={0}
                >
                    <Gradient/>
                    <Line1/>
                </AreaChart>
                <AreaChart
                    style={StyleSheet.absoluteFill}
                    data={data2}
                    svg={{fill: 'url(#gradient2)'}}
                    contentInset={{top: 10, bottom: 0}}
                    yMax={100}
                    yMin={0}
                >
                    <Gradient2/>
                    <Line2/>
                </AreaChart>
            </View>
        )
    }
}
