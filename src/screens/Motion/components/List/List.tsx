import React, {PureComponent} from 'react';
import {Easing, FlatList, StyleSheet, View} from 'react-native';

import {SharedElement} from 'react-native-motion';

import Toolbar from './Toolbar';
import data from '../../../../constants/dummyData/rate';
import {ListItem} from "../ListItem";

export default class List extends PureComponent<any, any> {

    sharedElementRefs: any;

    constructor(props) {
        super(props);

        this.state = {opacityOfSelectedItem: 1, selectedItem: null};
        this.sharedElementRefs = {};
    }

    onListItemPressed = item => {
        const {onItemPress} = this.props;
        this.setState({selectedItem: item});

        onItemPress(item);

        this.sharedElementRefs[item.name].moveToDestination();
    };
    onMoveToDestinationWillStart = () => {
        this.setState({opacityOfSelectedItem: 0});
    };
    onMoveToSourceDidFinish = () => {
        this.setState({opacityOfSelectedItem: 1});
    };
    getSharedNode = props => {
        const {item} = props;

        return (
            <View style={{backgroundColor: 'transparent'}}>
                <ListItem item={item} animateOnDidMount={false} isHidden={false}/>
            </View>
        );
    };
    renderItem = ({item}) => {
        const {opacityOfSelectedItem} = this.state;
        const {selectedItem} = this.props;

        const isHidden = selectedItem && selectedItem.name !== item.name;
        const isSelected = selectedItem && selectedItem.name === item.name;
        const id = item.name;

        return (
            <SharedElement
                // @ts-ignore
                easing={Easing.in(Easing.back())}
                ref={node => (this.sharedElementRefs[id] = node)}
                id={id}
                onMoveToDestinationWillStart={this.onMoveToDestinationWillStart}
                onMoveToSourceDidFinish={this.onMoveToSourceDidFinish}
                getNode={this.getSharedNode}
                item={item}
            >
                <View
                    style={{
                        opacity: opacityOfSelectedItem,
                        backgroundColor: 'transparent',
                    }}
                >
                    <ListItem
                        item={item}
                        onPress={this.onListItemPressed}
                        isHidden={isHidden}
                    />
                </View>
            </SharedElement>
        );
    };

    render() {
        const {opacityOfSelectedItem} = this.state;
        const {selectedItem, phase} = this.props;

        return (
            <View style={styles.container}>
                <Toolbar
                    isHidden={phase !== 'phase-0'}
                />
                <FlatList
                    data={data}
                    extraData={{phase, opacityOfSelectedItem}}
                    keyExtractor={item => item.name}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
});
