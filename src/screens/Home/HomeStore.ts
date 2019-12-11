import {observable} from "mobx";

export default class HomeStore {
    @observable isReady: boolean = false;
}
