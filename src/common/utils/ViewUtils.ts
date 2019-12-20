import Layout from "../../constants/Layout";
import {Platform, StatusBar} from "react-native";

export default class ViewUtils {

    static isIphoneX() {
        const dimen = Layout.window;
        return (
            Platform.OS === 'ios' &&
            !Platform.isPad &&
            !Platform.isTVOS &&
            ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
        );
    }

    static getStatusBarHeight(safe) {
        return Platform.select({
            ios: this.isIphoneX ? (safe ? 44 : 30) : 20,
            android: StatusBar.currentHeight,
            default: 0
        });
    }
}
