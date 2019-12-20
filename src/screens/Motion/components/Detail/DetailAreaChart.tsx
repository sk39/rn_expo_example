import React from 'react'
import {AreaChart, Path} from 'react-native-svg-charts'
import {Defs, LinearGradient, Stop} from 'react-native-svg'
import * as shape from 'd3-shape'
import {StyleSheet, View} from 'react-native'

export default class DetailAreaChart extends React.PureComponent<any, any> {

    render() {
        const data = [76, 82, 73, 96, 60, 78, 58, 70];
        const data2 = [64, 41, 70, 57, 85, 44, 53, 42];
        const Gradient = () => (
            <Defs key={"gradient"}>
                <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(160,76,255)'} stopOpacity={0.3}/>
                    <Stop offset={'50%'} stopColor={'rgb(160,76,255)'} stopOpacity={0.02}/>
                    <Stop offset={'100%'} stopColor={'rgb(160,76,255)'} stopOpacity={0}/>
                </LinearGradient>
            </Defs>
        );

        const Line1: any = ({line}) => (
            <Path key={'line'} d={line} stroke={'rgba(160,76,255,0.6)'} fill={'none'}/>
        );

        const Gradient2 = () => (
            <Defs key={"gradient"}>
                <LinearGradient id={'gradient2'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(9,171,255)'} stopOpacity={0.6}/>
                    <Stop offset={'60%'} stopColor={'rgb(9,171,255)'} stopOpacity={0.1}/>
                    <Stop offset={'100%'} stopColor={'rgb(9,171,255)'} stopOpacity={0}/>
                </LinearGradient>
            </Defs>
        );

        const Line2: any = ({line}) => (
            <Path key={'line'} d={line} stroke={'rgba(9,171,255,0.8)'} fill={'none'}/>
        );

        return (
            <View style={{height: 290}}>
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
                    curve={shape.curveNatural}
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
