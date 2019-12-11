import {observable} from "mobx";
import moment from "moment";

export default class CounterStore {
    @observable counter: number = 0;

    startCount() {
        setInterval(() => this.counter++, 1000);
    }

    currentDate() {
        return moment().format("YYYY-MM-DD HH:mm:ss");
    }
}
