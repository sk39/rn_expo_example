import {Platform} from "react-native";

const isIos = Platform.OS === "ios";
const ioniconPrefix = isIos ? "ios" : "md";
export default {
    Login: {
        name: `${ioniconPrefix}-log-in`,
        type: "ionicon"
    },
    Home: {
        name: `${ioniconPrefix}-home`,
        type: "ionicon"
    },
    Motion: {
        name: `${ioniconPrefix}-card`,
        type: "ionicon"
    },
    Chart: {
        name: "pie-chart",
        type: "feather"
    },
    Settings: {
        name: "settings",
        type: "feather"
    },
    More: {
        name: `${ioniconPrefix}-menu`,
        type: "ionicon"
    },
    Default: {
        name: "plus",
        type: "feather"
    }
};
