import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./Home/HomeScreen";
import LoginScreen from "./Login/LoginScreen";
import CounterScreen from "./Counter/CounterScreen";
import ListScreen from "./List/ListScreen";

const Routes: any = {
    Login: {
        screen: LoginScreen,
    },
    Home: {
        screen: HomeScreen,
    },
    Counter: {
        screen: CounterScreen,
    },
    List: {
        screen: ListScreen,
    }
};

const RootStack = createStackNavigator(
    Routes,
    {
        initialRouteName: 'Home',
    }
);

export default RootStack;

