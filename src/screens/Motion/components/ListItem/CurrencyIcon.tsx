import React, {PureComponent} from 'react';
import Bitcoin from "@assets/currency/Bitcoin.svg";
import Dash from "@assets/currency/Dash.svg";
import Etherium from "@assets/currency/Etherium.svg";
import Litecoin from "@assets/currency/Litecoin.svg";
import Monero from "@assets/currency/Monero.svg";
import RISE from "@assets/currency/RISE.svg";
import xrp from "@assets/currency/xrp.svg";

const LogoMap = {
    Bitcoin,
    Dash,
    Etherium,
    Litecoin,
    Monero,
    RISE,
    xrp
};

interface Props {
    name: string
}

export default class CurrencyIcon extends PureComponent<Props> {
    render() {
        return React.createElement(
            LogoMap[this.props.name],
            {width: 40, height: 40}
        );
    }
}
