import React, {Component} from 'react';
import {InteractionManager, Platform, StyleSheet, View} from 'react-native';
import {SharedElementRenderer} from 'react-native-motion';

import List from './components/List/List';
import Detail from './components/Detail/Detail';
import ToolbarBackground from './components/Detail/ToolbarBackground';
import Colors from "../../constants/Colors";
import TabBarIcon from "../../navigation/TabNaviator/TabBarIcon";

export default class CardListScreen extends Component<any, any> {

    static navigationOptions = {
        tabBarLabel: "Motion",
        tabBarIcon: ({focused, tintColor}) => (
            <TabBarIcon
                focused={focused}
                color={tintColor}
                name={
                    Platform.OS === 'ios'
                        ? `ios-card`
                        : 'md-card'
                }
            />
        )
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null,
            // phase of animation
            // phase-0:
            // default
            //
            // phase-1:
            // hide list toolbar, hide list bottom bar, show toolbar background and move item
            //
            // phase-2:
            // show detail toolbar, show detail bottom bar, show details of item
            //
            // phase-3
            // hide details of item
            //
            // phase-4
            // hide detail toolbar, hide detail bootom bar, move item back to scrool view
            phase: 'phase-0',
        };
    }

    onItemPressed = item => {
        this.setState({
            phase: 'phase-1',
            selectedItem: item,
        });
    };
    onBackPressed = () => {
        this.setState({
            phase: 'phase-3',
        });
    };
    onSharedElementMovedToDestination = () => {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                phase: 'phase-2',
            });
        });
    };
    onSharedElementMovedToSource = () => {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                selectedItem: null,
                phase: 'phase-0',
            });
        });
    };

    renderPage() {
        const {selectedItem, position, detailItem, phase} = this.state;

        return (
            <View style={{flex: 1}}>
                <List
                    selectedItem={selectedItem}
                    onItemPress={this.onItemPressed}
                    phase={phase}
                />
                <Detail
                    phase={phase}
                    selectedItem={selectedItem}
                    onBackPress={this.onBackPressed}
                    onSharedElementMovedToDestination={
                        this.onSharedElementMovedToDestination
                    }
                    onSharedElementMovedToSource={this.onSharedElementMovedToSource}
                />
            </View>
        );
    }

    render() {
        const {
            selectedItem,
            goToDetail,
            position,
            detailItem,
            goBackRequested,
            phase,
        } = this.state;

        return (
            <SharedElementRenderer>
                <View style={styles.container}>
                    <ToolbarBackground
                        color={selectedItem ? (selectedItem.backgroundColor || selectedItem.color) : "#fff"}
                        isHidden={phase !== 'phase-1' && phase !== 'phase-2'}
                    />
                    {this.renderPage()}
                </View>
            </SharedElementRenderer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backColor
    },
});
