import {observable} from "mobx";
import moment from "moment";

export default class CounterStore {
    @observable counter: number = 0;

    _timer: number;

    startCount() {
        this._timer = setInterval(() => this.counter++, 1000);
    }

    stopCount() {
        if (this._timer) {
            clearInterval(this._timer);
        }
    }

    currentDate() {
        return moment().format("YYYY-MM-DD HH:mm:ss");
    }
}
