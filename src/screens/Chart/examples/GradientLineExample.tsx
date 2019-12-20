import React, {Component} from 'react'
import {Defs, LinearGradient, Stop} from 'react-native-svg'
import {LineChart} from 'react-native-svg-charts'
import * as shape from 'd3-shape';

const testData = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

export default class GradientLineExample extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            data: testData.map(() => 0)
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({data: testData})
        }, 200);
    }

    render() {
        const {data} = this.state;
        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y1={'0'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(66, 194, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(244, 68, 217)'}/>
                </LinearGradient>
            </Defs>
        );

        return (
            <LineChart
                style={{height: 200}}
                data={data}
                animate
                curve={shape.curveNatural}
                contentInset={{top: 20, bottom: 20}}
                svg={{
                    strokeWidth: 3,
                    stroke: 'url(#gradient)',
                }}
            >
                <Gradient/>
            </LineChart>
        )
    }

}
