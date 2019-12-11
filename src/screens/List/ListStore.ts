import {action, observable} from "mobx";

export default class ListStore {
    @observable list: DummyModel[] = [];

    @action
    createDummyData() {
        this.list = [];
        for (let i = 0; i < 1000; i++) {
            this.list.push(new DummyModel(`Item ${i + 1}`))
        }
    }
}


export class DummyModel {
    name: string;

    constructor(name) {
        this.name = name;
    }
}
