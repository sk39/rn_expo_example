import React from "react";
import HomeScreen from "../../screens/Home/HomeScreen";
import CounterScreen from "../../screens/Counter/CounterScreen";
import SettingsScreen from "../../screens/Settgins/SettingsScreen";
import LottieScreen from "../../screens/Lottie/LottieScreen";

export const DisplayInTabScreens = {
    Home: HomeScreen,
    Counter: CounterScreen
};


export const OnlySideMenuScreens = {
    Settings: SettingsScreen,
    // List: ListScreen,
    Lottie: LottieScreen
};
