import {action, observable} from "mobx";
import InputState from "@common/components/Input/InputState";

export default class LoginStore {
    @observable processing: boolean = false;
    userId: InputState = new InputState();
    password: InputState = new InputState();

    @action
    setUserId(userId) {
        this.userId.setValue(userId);
    }

    @action
    setPassword(password) {
        this.password.setValue(password);
    }

    @action
    validate() {
        this.userId.validateEmpty();
        return this.password.validateEmpty();
    }
}



