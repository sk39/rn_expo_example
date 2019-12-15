import {action, observable} from "mobx";

export default class RootStore {
    @observable tmp: boolean = false;

    @action
    set(tmp) {
        this.tmp = tmp;
    }
}

