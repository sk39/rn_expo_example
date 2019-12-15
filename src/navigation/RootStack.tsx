import {createStackNavigator} from "react-navigation-stack";
import LoginScreen from "../screens/Login/LoginScreen";
import DrawNavigator from "./DrawNavigator";


const RootStack = createStackNavigator(
    {
        Main: {
            screen: DrawNavigator
        },
        Login: {
            screen: LoginScreen
        }
    },
    {
        mode: "modal",
        headerMode: "none"
    }
);

export default RootStack;
