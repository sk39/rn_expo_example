import React from "react";
import HomeScreen from "../../screens/Home/HomeScreen";
import CounterScreen from "../../screens/Counter/CounterScreen";
import SettingsScreen from "../../screens/Settgins/SettingsScreen";
import LottieScreen from "../../screens/Lottie/LottieScreen";
import CardListScreen from "../../screens/Motion/CardListScreen";
import ChartScreen from "../../screens/Chart/ChartScreen";
import InnerRouterScreen from "../../screens/InnerRouter/InnerRouterScreen";

export const DisplayInTabScreens = {
    Home: HomeScreen,
    Motion: CardListScreen,
    Chart: ChartScreen
};

export const OnlySideMenuScreens = {
    Settings: SettingsScreen,
    InnerRouter: InnerRouterScreen,
    Counter: CounterScreen,
    Lottie: LottieScreen,
};
