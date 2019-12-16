import React from 'react'
import {Defs, LinearGradient, Stop} from 'react-native-svg'
import {Grid, LineChart} from 'react-native-svg-charts'
import * as shape from 'd3-shape';

export default class GradientLineExample extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
            this.setState({data})
        }, 1000);
    }

    render() {
        const {data} = this.state;
        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y1={'0'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(66, 194, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(244,68,217)'}/>
                    {/*<Stop offset={'70%'} stopColor={'rgb(199,244,19)'}/>*/}
                    {/*<Stop offset={'100%'} stopColor={'rgb(255,95,0)'}/>*/}
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
                    strokeWidth: 4,
                    stroke: 'url(#gradient)',
                }}
            >
                {/*<Grid/>*/}
                <Gradient/>
            </LineChart>
        )
    }

}
