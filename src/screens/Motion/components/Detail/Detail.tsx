import React, {PureComponent} from 'react';
import {Easing, FlatList, StyleSheet, Text, View} from 'react-native'
import {SharedElement, TranslateYAndOpacity} from 'react-native-motion';
import Toolbar from './Toolbar';
import BottomBar from './BottomBar';
import {ListItem} from "../ListItem";
import DetailAreaChart from "./DetailAreaChart";

const DummyList = [
    {
        name: 'Lather moto jacket',
        amount: '$8,564.00',
    },
    {
        name: 'Lorem ipsum',
        amount: '$358.00',
    },
    // {
    //     name: 'Enim ad minim veniam',
    //     amount: '$1,355.00',
    // },
    {
        name: 'Dolor in reprehenderit',
        amount: '$2,333.12',
    },
];

class Detail extends PureComponent<any, any> {

    sharedElementRef: any;

    constructor(props) {
        super(props);

        this.state = {
            opacityOfDestinationItem: 0,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.phase === 'phase-2' && this.props.phase === 'phase-3') {
            this.sharedElementRef.moveToSource();
        }
    }

    onMoveToDestinationDidFinish = () => {
        this.setState({opacityOfDestinationItem: 1});
        this.props.onSharedElementMovedToDestination();
    };
    onMoveToSourceWillStart = () => {
        this.setState({opacityOfDestinationItem: 0});
    };
    renderItem = ({item, index}) => {
        const {phase} = this.props;

        let delay = index;
        // we need it to go from the end
        if (phase === 'phase-3') {
            delay = DummyList.length - index;
        }

        return (
            <TranslateYAndOpacity isHidden={phase !== 'phase-2'} delay={32 * delay}>
                <View style={styles.itemContainer}>
                    <View style={styles.rowContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{item.name}</Text>
                        </View>
                        <Text style={styles.amountText}>{item.amount}</Text>
                    </View>
                    <Text style={styles.vatText}>
                        {`${item.amount} X1 (Including VAT 10%)`}
                    </Text>
                </View>
            </TranslateYAndOpacity>
        );
    };
    renderChart = () => {
        const {phase} = this.props;
        return (
            <View>
                <TranslateYAndOpacity
                    isHidden={phase !== 'phase-2'}
                    delay={32 * (DummyList.length + 2)}>
                    <DetailAreaChart/>
                </TranslateYAndOpacity>
            </View>
        );
    };

    render() {
        const {
            selectedItem,
            startPosition,
            phase,
            onBackPress,
            onSharedElementMovedToSource,
        } = this.props;
        const {opacityOfDestinationItem} = this.state;

        const {items = []} = selectedItem || {};

        if (!selectedItem) {
            return null;
        }

        return (
            <View style={styles.container}>
                <Toolbar isHidden={phase === 'phase-3'} onBackPress={onBackPress}/>
                <SharedElement
                    ref={node => (this.sharedElementRef = node)}
                    sourceId={selectedItem.name}
                    easing={Easing.in(Easing.back())}
                    onMoveToDestinationDidFinish={this.onMoveToDestinationDidFinish}
                    onMoveToSourceWillStart={this.onMoveToSourceWillStart}
                    onMoveToSourceDidFinish={onSharedElementMovedToSource}
                >
                    <View
                        style={{
                            opacity: opacityOfDestinationItem,
                            backgroundColor: 'transparent',
                        }}
                    >
                        <ListItem
                            item={selectedItem}
                            onPress={() => {
                            }}
                            animateOnDidMount={false}
                            isHidden={false}
                            isDetail={true}
                        />
                    </View>
                </SharedElement>
                <View style={{marginTop: 8}}/>
                <FlatList
                    data={DummyList}
                    extraData={phase}
                    keyExtractor={item => item.amount}
                    renderItem={this.renderItem}
                />
                {this.renderChart()}
                <BottomBar isHidden={phase === 'phase-3'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1
    },
    titleContainer: {
        flex: 1,
    },
    itemContainer: {
        marginHorizontal: 16,
        marginVertical: 8,
    },
    rowContainer: {
        alignItems: 'center',
        flexDirection: "row"
    },
    titleText: {
        color: '#f1f1f1',
    },
    amountText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#f1f1f1',
    },
    vatText: {
        fontSize: 10,
        color: 'gray',
    },
});

export default Detail;
