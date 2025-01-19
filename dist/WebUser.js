"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
const UserState_1 = require("./UserState");
class WebUser {
    constructor(login_id, password, state) {
        if (!login_id || !password) {
            throw new Error("login_id and password cannot be empty.");
        }
        this.login_id = login_id;
        this.password = password;
        this.state = UserState_1.UserState.NEW;
    }
    getLoginId() {
        return this.login_id;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    toString() {
        return "WebUser[loginID: " + this.login_id + " " + "Password: " + this.password + " " + "State: " + this.state + "]";
    }
}
exports.WebUser = WebUser;
